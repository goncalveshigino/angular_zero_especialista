import { Injectable } from '@angular/core';
import createAuth0Client, { GetUserOptions } from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';

import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Crie uma instância observável de Auth0 do cliente
  auth0Client$ = (from(
    createAuth0Client({
      domain: "dev-r69inw-x.us.auth0.com",
      client_id: "onCOaUWin6eoixQFWYtRchYxShLNmf1z",
      redirect_uri: `${window.location.origin}/callback`
    })
  ) as Observable<Auth0Client>).pipe(
    shareReplay(1), // Cada assinatura recebe o mesmo valor compartilhado
    catchError(err => throwError(err))
  );
 // Definir observáveis ​​para métodos SDK que retornam promessas por padrão
  // Para cada método Auth0 SDK, primeiro verifique se a instância do cliente está pronta
  // concatMap: Usando a instância do cliente, chame o método SDK; SDK retorna uma promessa
  // de: converter essa promessa resultante em um observável
  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated())),
    tap(res => this.loggedIn = res)
  );
  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );
  // Criar assunto e observável público de dados de perfil de usuário
  private userProfileSubject$ = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject$.asObservable();
  // Create a local property for login status
  loggedIn: boolean = false;

  constructor(private router: Router) { }

  // Ao chamar, as opções podem ser passadas, se desejado
  // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
  getUser$(options?: GetUserOptions): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options))),
      tap(user => this.userProfileSubject$.next(user))
    );
  }

  localAuthSetup() {
  // Isso só deve ser chamado na inicialização do aplicativo
    // Configurar autenticação local stream
    const checkAuth$ = this.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) => {
        if (loggedIn) {
         // Se autenticado, obtém o usuário e define no aplicativo
          // NOTA: você pode passar opções aqui se necessário
          return this.getUser$();
        }
        // If not authenticated, return stream that emits 'false'
        return of(loggedIn);
      })
    );
    checkAuth$.subscribe((response: { [key: string]: any } | boolean) => {
      // If authenticated, response will be user object
      // If not authenticated, response will be 'false'
      this.loggedIn = !!response;
    });
  }

  login(redirectPath: string = '/') {
    // A desired redirect path can be passed to login method
    // (e.g., from a route guard)
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log in
      client.loginWithRedirect({
        redirect_uri: `${window.location.origin}/callback`,
        appState: { target: redirectPath }
      });
    });
  }

  
  handleAuthCallback() {
    // Apenas o componente de retorno de chamada deve chamar este método
    // Chamar quando o aplicativo recarregar após o usuário fazer login com Auth0
    let targetRoute: string;  // Caminho para redirecionar após o processo de login
    const authComplete$ = this.handleRedirectCallback$.pipe(
      // Have client, now call method to handle auth callback redirect
      tap(cbRes => {
       // Obter e definir a rota de redirecionamento de destino dos resultados de retorno de chamada
        targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
      }),
      concatMap(() => {
        // Redirect callback complete; get user and login status
        return combineLatest(
          this.getUser$(),
          this.isAuthenticated$
        );
      })
      
    );
  
    // Inscrever-se para conclusão de autenticação observável
    // A resposta será uma matriz de usuário e status de login
    authComplete$.subscribe(([user, loggedIn]) => {
         
     // Redirecionar para a rota de destino após o processamento do retorno de chamada
      this.router.navigate([targetRoute]);
    });
  }


  logout() {
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log out
      client.logout({
        client_id: "onCOaUWin6eoixQFWYtRchYxShLNmf1z",
        returnTo: `${window.location.origin}`
      });
    });
  }


}

import { Duration, Task, Wait } from '@serenity-js/core';
import { By, Click, Enter, isVisible, PageElement, Scroll } from '@serenity-js/web';



export const FacebookLogin = {
    using: (username: string, password: string) => 
        Task.where(`#actor iniciar sesion como ${ username }`,
            Enter.theValue(username).into(LoginForm.usernameField()),
            Enter.theValue(password).into(LoginForm.passwordField()),
            Click.on(LoginForm.loginButton())
            
        )

};

export const NotificationFb = {
    using: () =>
        Task.where(`#actor navega a la sección de notificaciones`,
            Wait.until(LoginForm.notificationButton(), isVisible()), 
            Click.on(LoginForm.notificationButton()),               
            Wait.until(LoginForm.notificationList(), isVisible()),  
            Scroll.to(LoginForm.notificationList()),
            Wait.for(Duration.ofSeconds(5))                 
        ),
};
export const AleatoryNotification = {
    using: () =>
        Task.where(`#actor selecciona una notificación aleatoria`,
            Wait.until(LoginForm.aleatoryNotificationd(), isVisible()),
            Click.on(LoginForm.aleatoryNotificationd()),
            Wait.for(Duration.ofSeconds(5))
        ),
};

export const PostA = {
    using: () => 
        Task.where('#actor abre el post y da me gusta',
            Wait.until(LoginForm.postFacebook(), isVisible()), 
            Click.on(LoginForm.meGustaButton())
                         
        ),
};


const LoginForm = {
    usernameField: () => 
        PageElement.located(By.id('email')).describedAs('campo usuario'),

    passwordField: () =>
        PageElement.located(By.id('pass')).describedAs('campo contraseña'),

    loginButton: () =>
        PageElement.located(By.xpath('/html/body/div[1]/div[1]/div[1]/div/div/div/div[2]/div/div[1]/form/div[2]/button')).describedAs('boton login'),

    notificationButton: () => 
        PageElement.located(By.xpath('/html/body/div[1]/div/div[1]/div/div[2]/div[5]/div[1]/div[4]/span/span/div/a')).describedAs('botón de notificaciones'),
    
    notificationList: () => 
        PageElement.located(By.xpath('/html/body/div[1]/div/div[1]/div/div[2]/div[5]/div[2]/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div[1]/div[3]')).describedAs('lista de notificaciones'),
   
    aleatoryNotificationd: () => 
        PageElement.located(By.xpath('/html/body/div[1]/div/div[1]/div/div[2]/div[5]/div[2]/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div[1]/div[3]/div[2]/div/div/div[2]/div[1]/div/a/div[1]')).describedAs('Notificacion a'),
    
    postFacebook: () => 
        PageElement.located(By.xpath('/html/body/div[1]/div/div[1]/div/div[5]/div/div/div[2]/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div/div/div/div/div/div/div/div/div/div/div[13]/div/div/div[4]/div/div/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[2]/ul/li[2]/span/div/span/div[1]/div/div')).describedAs('post de facebook'),

    meGustaButton: () => 
        PageElement.located(By.xpath('/html/body/div[1]/div/div[1]/div/div[5]/div/div/div[2]/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div/div/div/div/div/div/div/div/div/div/div[13]/div/div/div[4]/div/div/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div[2]/span/span')).describedAs('boton me gusta'),


}

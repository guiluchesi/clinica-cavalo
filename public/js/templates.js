angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/contact.html','<div class="expanded row">\n  <div class="row">\n    <h3>Formul\xE1rio de Contato</h3>\n    <div ng-if="messages.error" role="alert" class="callout alert">\n      <div ng-repeat="error in messages.error">{{error.msg}}</div>\n    </div>\n    <div ng-if="messages.success" role="alert" class="callout success">\n      <div ng-repeat="success in messages.success">{{success.msg}}</div>\n    </div>\n    <form ng-submit="sendContactForm()">\n      <div class="row">\n        <div class="medium-8 columns">\n          <label for="name">Nome</label>\n          <input type="text" name="name" id="name" ng-model="contact.name" autofocus>\n        </div>\n      </div>\n      <div class="row">\n        <div class="medium-8 columns">\n          <label for="email">E-mail</label>\n          <input type="email" name="email" id="email" ng-model="contact.email">\n        </div>\n      </div>\n      <div class="row">\n        <div class="medium-8 columns">\n          <label for="message">Mensagem</label>\n          <textarea name="message" id="message" rows="7" ng-model="contact.message"></textarea>\n        </div>\n      </div>\n      <button type="submit" class="button">Enviar</button>\n    </form>\n  </div>\n</div>\n');
$templateCache.put('partials/footer.html','<footer>\n  <p>\xA9 2017 - Largatos e Cia.</p>\n</footer>\n');
$templateCache.put('partials/forgot.html','<div class="column row">\n  <div class="medium-8 medium-offset-2 columns">\n    <div ng-if="messages.error" role="alert" class="callout alert">\n      <div ng-repeat="error in messages.error">{{error.msg}}</div>\n    </div>\n    <div ng-if="messages.success" role="alert" class="callout success">\n      <div ng-repeat="success in messages.success">{{success.msg}}</div>\n    </div>\n    <form ng-submit="forgotPassword()">\n      <h4>Esqueceu sua Senha</h4>\n\n      <p>Digite seu e-mail abaixo para enviarmos as instru\xE7\xF5es de redefini\xE7\xE3o de senha.</p>\n\n      <label for="email">E-mail</label>\n      <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\n\n      <button type="submit" class="button success">Redefinir Senha</button>\n    </form>\n  </div>\n</div>\n');
$templateCache.put('partials/header.html','<div ng-controller="HeaderCtrl" class="top-bar">\n  <div class="top-bar-title">\n    <span data-responsive-toggle="responsive-menu" data-hide-for="medium">\n      <span class="menu-icon light" data-toggle></span>\n    </span>\n    <h1 class="main-logo">\n      <a href="/">Cl\xEDnica Veterin\xE1ria</a>\n    </h1>\n  </div>\n  <div id="responsive-menu">\n    <div class="top-bar-left">\n      <ul class="vertical medium-horizontal menu">\n        <li><a href="/" ng-class="{ active: isActive(\'/\')}">Inicial</a></li>\n        <li><a href="/contact" ng-class="{ active: isActive(\'/contact\')}">Contato</a></li>\n      </ul>\n    </div>\n    <div ng-if="isAuthenticated()" class="top-bar-right">\n      <ul class="vertical medium-horizontal menu">\n        <li><a href="/account" ng-class="{ active: isActive(\'/account\')}">Minha conta</a></li>\n        <li><a href="#" ng-click="logout()">Sair</a></li>\n      </ul>\n    </div>\n    <div ng-if="!isAuthenticated()" class="top-bar-right">\n      <ul class="vertical medium-horizontal menu">\n        <li><a href="/login" ng-class="{ active: isActive(\'/login\')}">Entrar</a></li>\n        <li><a href="/signup" ng-class="{ active: isActive(\'/signup\')}">Cadastrar</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/home.html','<div class="expanded row">\n  <div class="row">\n    <div class="medium-12 columns">\n      <figure class="logo-inicial">\n        <img src="assets/img/clinica.png" alt="">\n      </figure>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/login.html','<div class="column row">\n  <div class="row">\n    <div class="medium-8 medium-offset-2 columns">\n      <div ng-if="messages.error" role="alert" class="callout alert">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n\n      <form ng-submit="login()">\n        <h4>Entrar</h4>\n\n        <label for="email">E-mail</label>\n        <input type="email" name="email" id="email" placeholder="E-mail" ng-model="user.email" autofocus>\n\n        <label for="password">Senha</label>\n        <input type="password" name="password" id="password" placeholder="Senha" ng-model="user.password">\n\n        <p><a href="/forgot">Esqueceu sua senha?</a></p>\n\n        <button type="submit" class="button">Entrar</button>\n      </form>\n\n      <div class="hr-title"><span>or</span></div>\n\n      <div class="button-group">\n      </div>\n\n      <p>N\xE3o tem uma conta? <a href="/signup">Cadastre-se</a></p>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/profile.html','<div class="column row">\n  <div class="medium-7 columns">\n    <div ng-if="messages.error" role="alert" class="callout alert">\n      <div ng-repeat="error in messages.error">{{error.msg}}</div>\n    </div>\n    <div ng-if="messages.success" role="alert" class="callout success">\n      <div ng-repeat="success in messages.success">{{success.msg}}</div>\n    </div>\n\n    <h5>Informa\xE7\xE3o do Perfil</h5>\n\n    <form ng-submit="updateProfile()">\n      <label for="email">E-mail</label>\n      <input type="email" name="email" id="email" ng-model="profile.email">\n\n      <label for="name">Nome</label>\n      <input type="text" name="name" id="name" ng-model="profile.name">\n\n      <label>Gen\xEAro</label>\n      <input type="radio" name="gender" id="male" value="male" ng-checked="profile.gender === \'male\'">\n      <label for="male">Homem</label>\n      <input type="radio" name="gender" id="female" value="female" ng-checked="profile.gender === \'female\'">\n      <label for="female">Mulher</label>\n\n      <label for="location">Localiza\xE7\xE3o</label>\n      <input type="text" name="location" id="location" ng-model="profile.location">\n\n      <label for="website">Site</label>\n      <input type="text" name="website" id="website" ng-model="profile.website">\n\n      <label>Gravatar</label>\n      <img ng-src="{{profile.gravatar}}" class="gravatar" width="100" height="100">\n\n      <button type="submit" class="success button">Atualizar Perfil</button>\n    </form>\n\n    <h5>Alterar Senha</h5>\n\n    <form ng-submit="changePassword()">\n      <label for="password">Nova Senha</label>\n      <input type="password" name="password" id="password" ng-model="profile.password">\n\n      <label for="confirm">Confirmar Senha</label>\n      <input type="password" name="confirm" id="confirm" ng-model="profile.confirm">\n\n      <button type="submit" class="success button">Alterar Senha</button>\n    </form>\n\n    <h5>Contas Conectadas</h5>\n    <h5>Deletar Conta</h5>\n\n    <form ng-submit="deleteAccount()">\n      <p>Voc\xEA pode deletar sua conta, mas tenha em mente que essa a\xE7\xE3o \xE9 irrevers\xEDvel.</p>\n      <button type="submit" class="alert button">Deletar Conta</button>\n    </form>\n  </div>\n</div>\n');
$templateCache.put('partials/reset.html','<div class="column row">\n  <div class="medium-8 medium-offset-2 columns">\n    <div ng-if="messages.error" role="alert" class="callout alert">\n      <div ng-repeat="error in messages.error">{{error.msg}}</div>\n    </div>\n    <div ng-if="messages.success" role="alert" class="callout success">\n      <div ng-repeat="success in messages.success">{{success.msg}}</div>\n    </div>\n    <form ng-submit="resetPassword()">\n      <h4>Atualizar Senha</h4>\n\n      <label for="password">Nova Senha</label>\n      <input type="password" name="password" id="password" placeholder="Nova senha" ng-model="user.password" autofocus>\n\n      <label for="confirm">Confirmar Senha</label>\n      <input type="password" name="confirm" id="confirm" placeholder="Confirmar senha" ng-model="user.confirm">\n\n      <button type="submit" class="success button">Atualizar Senha</button>\n    </form>\n  </div>\n</div>\n');
$templateCache.put('partials/signup.html','<div class="column row">\n  <div class="row">\n    <div class="medium-8 medium-offset-2 columns">\n      <div ng-if="messages.error" role="alert" class="callout alert">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n\n      <form ng-submit="signup()">\n        <h4>Criar uma Conta</h4>\n\n        <label for="email">E-mail</label>\n        <input type="email" name="email" id="email" placeholder="E-mail" ng-model="user.email" autofocus>\n\n        <label for="name">Nome</label>\n        <input type="text" name="name" id="name" placeholder="Nome" ng-model="user.name">\n\n        <label for="password">Senha</label>\n        <input type="password" name="password" id="password" placeholder="Senha" ng-model="user.password">\n\n        <p class="help-text">Ao se cadastrar, voc\xEA est\xE1 concordando com os <a href="/">Termos de Servi\xE7os</a>.</p>\n\n        <button type="submit" class="button">Criar uma conta</button>\n      </form>\n\n      <div class="hr-title"><span>ou</span></div>\n\n      <div class="button-group">\n      </div>\n\n      <p>J\xE1 tem uma conta? <a href="/login">Entrar</a></p>\n    </div>\n  </div>\n</div>\n');}]);
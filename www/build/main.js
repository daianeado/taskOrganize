webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projetos_projetos__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarefas_tarefas__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_info__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__tarefas_tarefas__["b" /* TarefasPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__projetos_projetos__["a" /* ProjetosPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__info_info__["a" /* InfoPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Tarefas" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Projetos" tabIcon="folder"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Info" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TarefasService = (function () {
    function TarefasService(http) {
        this.http = http;
        this.tarefas = [
            {
                codigo: 1, projeto: 1, descricao: 'Tarefa 1',
                data: new Date(2017, 2, 29), prioridade: 1
            },
            {
                codigo: 2, projeto: 1, descricao: 'Tarefa 2',
                data: new Date(2017, 5, 17), prioridade: 2
            },
            {
                codigo: 3, projeto: 2, descricao: 'Tarefa 3',
                data: new Date(2017, 2, 10), prioridade: 1
            },
            {
                codigo: 4, projeto: 3, descricao: 'Tarefa 4',
                data: new Date(2017, 3, 2), prioridade: 3
            },
            {
                codigo: 5, projeto: 3, descricao: 'Tarefa 5',
                data: new Date(2017, 2, 28), prioridade: 1
            }
        ];
        this.ultimoCodigo = 5;
    }
    TarefasService.prototype.getTarefas = function () {
        return this.tarefas;
    };
    TarefasService.prototype.getTarefa = function (codigoTarefa) {
        for (var i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].codigo == codigoTarefa) {
                return this.tarefas[i];
            }
        }
    };
    TarefasService.prototype.editTarefa = function (c, prj, desc, dat, prior) {
        for (var i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].codigo == c) {
                this.tarefas[i].projeto = prj;
                this.tarefas[i].descricao = desc;
                this.tarefas[i].data = dat;
                this.tarefas[i].prioridade = prior;
                break;
            }
        }
    };
    TarefasService.prototype.addTarefa = function (prj, desc, dat, prior) {
        this.ultimoCodigo++;
        this.tarefas.push({
            codigo: this.ultimoCodigo,
            projeto: prj,
            descricao: desc,
            data: dat,
            prioridade: prior
        });
    };
    TarefasService.prototype.deleteTarefa = function (c) {
        for (var i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].codigo == c) {
                this.tarefas.splice(i, 1);
                break;
            }
        }
    };
    return TarefasService;
}());
TarefasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TarefasService);

//# sourceMappingURL=tarefas-service.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
    };
    return InfoPage;
}());
InfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-info',template:/*ion-inline-start:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/info/info.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Info</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-segment [(ngModel)]="opcao">\n        <ion-segment-button value="sobre">\n            Sobre\n        </ion-segment-button>\n        <ion-segment-button value="contato">\n            Contato\n        </ion-segment-button>\n    </ion-segment>\n\n    <div [class.invisivel]="opcao == \'contato\'" text-center>\n        <br>\n        <h4>Bem vindo ao Task Organizer !</h4>\n        <p>Organizar seus projetos nunca foi tão fácil.</p>\n        <p>Com este aplicativo você poderá criar uma lista de projetos e seu time e gerenciá-los de forma rápida e prática. Além disso, uma lista de tarefas poderá ser criada para cada um dos projetos, informando a data final dessa tarefa e seu grau de prioridade.\n        </p>\n    </div>\n    <div [class.invisivel]="opcao == \'sobre\'" *ngIf="opcao == \'contato\'">\n        <div text-center class="col-md-6">\n            <br>\n            <h2>Nossos desevolvedores </h2>\n            <p> Entre em contato com nossos desenvolvedores ou através de nossas redes sociais oficiais.</p>\n            <ion-slides pager id="devs-img-contact">\n                <ion-slide class="dev-info">\n                    <img class="img-devs" src="https://lh3.googleusercontent.com/1_UtekEP7F3DziiX2Xuhci8CFL7XrXnoFjX3nJVQY2dxYaXzFGZfGmWaZsWf6387Kt1Xu_YscaBdXLJr0H3ygvOA_aKYJ6CcAL8qyhC-_5UtsJXXhl4B8YfoeCTe0GQQ1oZI2OqoWCGe-sA0o5_1xWBvnczHzmTv6x46HacpZnWu0MHO_CoS7ErvZB-g4SeYGsykjjabWMcJGCKZAKsgbI22h1Ab1VVyma71JTwEYspUTMieLY0kSif4s_pBiaHIRT0Vg4vSLR2DO1z3WLHwjwDVaGaZSKAFAhTVI_tXTwO1A6_V4_G8qbiWIGadObuGlC6nS_9N0bZouajzkp49bV6F4I5gnV1Fc8Rc294sNybRuaUyPZn70s6YqWt5hDvkD7osQAkkJNpunRXmm75eS5nnF-DaTj4EOqs3Sv00Iemgxgz9cN4LcLHzgDAX4_6u5oxGBrYQbuBwtOGUS_RYKjstoqm7skYkNXcdujbjFfD91M7-7gYdWWHPyQ2RK3DeK4YIdVGTIeJsZoqEQONQN3uEw8p77X9kp4AoTP4NmfnrJzWEfFuj6oyu2ctqBYEm-uZnnFLAnCjle_GqL0luI-3BUnnKRLB2MKYY3Q1n6xKfSK8zMeHVorlNducn76IhE_oX9RmqLSlIYycDILSV08dnag=s340-no">\n                    <h3>Daiane Oliveira</h3>\n                    <ion-icon ios="logo-whatsapp" md="logo-whatsapp"></ion-icon> (31) 99999-9999\n                </ion-slide>\n\n                <ion-slide class="dev-info">\n                    <img class="img-devs" src="https://lh3.googleusercontent.com/yVzETPt2JwhbSh0b2Jbm1A2pcAhaXYkDBQRNn7JdNE5Tti4CUeW-5FxmFPFOD_xk3_gIYlAmnfiSnD8XS3WvWhR-3SYnAWbYGIKtCltVLJgPp0lshCY4COwiMQxRU8FkAaOvLvCja0hP5t_xHegdOwHzK4GGt8XMg8P_S0X8gtC5Nrl7qE1tKfQJajy144ncJQAylUBYr8ZcplfOaHecgoD8qlmp2TyKkX0R3PiAe1Hrn5WFvO3N0-7_ziNayEpY9Xt1iPPX8gCf3B1CxFJSHK0URUpDHbOs-XdCh4-mvYUIBWcam301PRoD7HKsWDYSp4nhRmeG4iy1qejDT_Zde8JQFZ0SXk1p5QpeV-3XUZCb0iTSh7VuQJMf_ne2yBCBxh04TJROjTLogk9d2BPaOzq_ZsB_D6MDHhfi4n5CvCThKSf_iBcflUVOoq38UE1AQt5XXdG9GSr9Um7M2G1LTyphlZ52vD8OJ8gYG5TBQBTKhNjjHm96haK7gZht-V6oxVgxMBlOQha3MgGEKt3OcWRgjRz-xp2ocBJ1cGth_xJKjh34zdf9B7o1NzoQ4XWzNj1nv6LMOvARJHKlRw3fkJ_9I8WCVuh0CZD_rZ8ODSv9eZFKkubR1mt6F6QU9HkuThMmJvEwlkC5qGomneoBiHSfYQ=w364-h647-no">\n                    <h3>Jeferson Martins</h3>\n                    <ion-icon ios="logo-whatsapp" md="logo-whatsapp"></ion-icon> (31) 99999-9999\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div>\n            <p>\n\n                <a href="https://www.facebook.com">\n                    <ion-buttons class="buttons-social-media">\n                        <button ion-button icon-only clear>\n                              <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n                          </button>\n                    </ion-buttons>\n\n                </a>\n                <a href="https://www.instagram.com">\n                    <ion-buttons class="buttons-social-media">\n                        <button ion-button icon-only clear>\n                              <ion-icon ios="logo-instagram" md="logo-instagram"></ion-icon>\n                          </button>\n                    </ion-buttons>\n                </a>\n                <a href="https://www.twitter.com">\n                    <ion-buttons class="buttons-social-media">\n                        <button ion-button icon-only clear>\n                              <ion-icon ios="logo-twitter" md="logo-twitter"></ion-icon>\n                          </button>\n                    </ion-buttons>\n                </a>\n                <a href="https://www.youtube.com">\n                    <ion-buttons class="buttons-social-media">\n                        <button ion-button icon-only clear>\n                              <ion-icon ios="logo-youtube" md="logo-youtube"></ion-icon>\n                          </button>\n                    </ion-buttons>\n                </a>\n            </p>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/info/info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], InfoPage);

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrantesTimeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntegrantesTimeService = (function () {
    function IntegrantesTimeService(http) {
        this.http = http;
        this.time = [
            { codigoIntegrante: 1, codigoProjeto: 1, nome: 'Nicolly' },
            { codigoIntegrante: 2, codigoProjeto: 1, nome: 'Athur' },
            { codigoIntegrante: 3, codigoProjeto: 2, nome: 'Lucas' },
            { codigoIntegrante: 4, codigoProjeto: 2, nome: 'Sophia' },
            { codigoIntegrante: 5, codigoProjeto: 3, nome: 'Daiane' },
            { codigoIntegrante: 6, codigoProjeto: 3, nome: 'Jeferson' },
        ];
        this.ultimoCodigo = 6;
    }
    IntegrantesTimeService.prototype.getTime = function (p) {
        var time = [];
        for (var i = 0; i < this.time.length; i++) {
            if (this.time[i].codigoProjeto == p) {
                time.push(this.time[i]);
            }
        }
        return time;
    };
    IntegrantesTimeService.prototype.deleteIntegranteTime = function (c) {
        for (var i = 0; i < this.time.length; i++) {
            if (this.time[i].codigoIntegrante == c) {
                this.time.splice(i, 1);
                break;
            }
        }
    };
    IntegrantesTimeService.prototype.addIntegrante = function (c, n) {
        this.ultimoCodigo++;
        this.time.push({
            codigoProjeto: c,
            codigoIntegrante: this.ultimoCodigo,
            nome: n
        });
    };
    return IntegrantesTimeService;
}());
IntegrantesTimeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], IntegrantesTimeService);

//# sourceMappingURL=integrantes-time-service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/info/info.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service_projetos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projeto_projeto__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjetosPage = (function () {
    function ProjetosPage(navCtrl, navParams, projetosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetosService = projetosService;
        this.projetos = projetosService.getProjetos();
    }
    ProjetosPage.prototype.selecionaProjeto = function (c) {
        var cn = parseInt(c);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__projeto_projeto__["a" /* ProjetoPage */], { codigo: cn, novo: false });
    };
    ProjetosPage.prototype.novoProjeto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__projeto_projeto__["a" /* ProjetoPage */], { codigo: 0, novo: true });
    };
    return ProjetosPage;
}());
ProjetosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-projetos',template:/*ion-inline-start:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/projetos/projetos.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Projetos</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <button ion-item *ngFor="let p of projetos" (click)="selecionaProjeto(p.codigo)">\n          {{p.nome}}\n        </button>\n    </ion-list>\n    <div id="mais" text-center>\n        <button ion-button round color="primary" (click)="novoProjeto()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/projetos/projetos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service_projetos_service__["a" /* ProjetosService */]])
], ProjetosPage);

//# sourceMappingURL=projetos.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_integrante_time_service_integrantes_time_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjetoPage = (function () {
    function ProjetoPage(navCtrl, navParams, projetosService, integrantesTimeService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetosService = projetosService;
        this.integrantesTimeService = integrantesTimeService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.nomeProjeto = "";
        this.codigoProjeto = navParams.get('codigo');
        this.novo = navParams.get('novo');
        var projetos = projetosService.getProjetos();
        if (!this.novo) {
            for (var i = 0; i < projetos.length; i++) {
                if (projetos[i].codigo == this.codigoProjeto) {
                    this.nomeProjeto = projetos[i].nome;
                    break;
                }
            }
        }
        this.time = integrantesTimeService.getTime(this.codigoProjeto);
    }
    ProjetoPage.prototype.alterar = function () {
        this.projetosService.editProjeto(this.codigoProjeto, this.nomeProjeto);
        this.navCtrl.pop();
    };
    ProjetoPage.prototype.excluir = function () {
        this.projetosService.deleteProjeto(this.codigoProjeto);
        this.navCtrl.pop();
        //Deleta os integrantes daquele projeto
        for (var i = 0; i < this.time.length; i++) {
            this.integrantesTimeService.deleteIntegranteTime(this.time[i].codigoIntegrante);
        }
        ;
        //Exibe confirmação de exclusão
        var toast = this.toastCtrl.create({
            message: 'Projeto e integrantes excluídos com sucesso!',
            duration: 3000
        });
        toast.present();
    };
    ProjetoPage.prototype.incluir = function () {
        this.projetosService.addProjeto(this.nomeProjeto);
        this.navCtrl.pop();
    };
    ProjetoPage.prototype.deleteIntegrante = function (e) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Tem certeza disso?',
            message: 'A operação não pode ser desfeita.',
            buttons: [
                {
                    text: 'Deletar',
                    handler: function () {
                        _this.integrantesTimeService.deleteIntegranteTime(e);
                        _this.time = _this.integrantesTimeService.getTime(_this.codigoProjeto);
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    ProjetoPage.prototype.addIntegrante = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Integrante do time',
            message: "Informe o nome do novo integrante do time",
            inputs: [
                {
                    name: 'nomeIntegrante',
                    placeholder: 'Nome...'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) { }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.integrantesTimeService.addIntegrante(_this.codigoProjeto, data.nomeIntegrante);
                        _this.time = _this.integrantesTimeService.getTime(_this.codigoProjeto);
                    }
                }
            ]
        });
        prompt.present();
    };
    return ProjetoPage;
}());
ProjetoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-projeto',template:/*ion-inline-start:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/projeto/projeto.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Projeto</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label color="primary">Nome:</ion-label>\n            <ion-input type="text" placeholder="Nome do projeto" [(ngModel)]="nomeProjeto" name="nomeProjeto" required #nome="ngModel"></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <ion-list [class.invisivel]="novo">\n        <ion-list-header>\n            Integrantes do Time\n        </ion-list-header>\n        <ion-item *ngFor="let e of time">\n            <ion-icon ios="ios-person" md="md-person"></ion-icon>\n            {{e.nome}}\n            <button ion-button item-end color="danger" (click)="deleteIntegrante(e.codigoIntegrante)">DELETAR</button>\n        </ion-item>\n        <ion-item text-center *ngIf="time.length < 1">\n            <ion-icon name="information-circle"></ion-icon>\n            <i>Ainda não há integrantes no time desse projeto.</i>\n        </ion-item>\n    </ion-list>\n    <ion-buttons>\n        <button id="addIntegrante" ion-button color="light" (click)="addIntegrante()" [class.invisivel]="novo">ADICIONAR INTEGRANTE</button>\n    </ion-buttons>\n\n\n    <ion-card class="alerta" *ngIf="!nome.valid && nome.dirty">\n        <ion-card-content>O nome do projeto não pode ficar em branco.</ion-card-content>\n    </ion-card>\n\n    <div id="mais">\n        <button ion-button round color="primary" (click)="incluir()" [disabled]="!nome.valid" [class.invisivel]="!novo"><ion-icon name="checkmark"></ion-icon></button>\n        <button ion-button round color="primary" (click)="alterar()" [disabled]="!nome.valid" [class.invisivel]="novo"><ion-icon name="checkmark"></ion-icon></button>\n        <button ion-button round color="danger" (click)="excluir()" [class.invisivel]="novo"><ion-icon name="trash"></ion-icon></button>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/projeto/projeto.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__["a" /* ProjetosService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_integrante_time_service_integrantes_time_service__["a" /* IntegrantesTimeService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
], ProjetoPage);

//# sourceMappingURL=projeto.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TarefasPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filtro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarefa_tarefa__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tarefas_service_tarefas_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_projetos_service_projetos_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TarefasPage = (function () {
    function TarefasPage(navCtrl, navParams, menuCtrl, tarefasService, projetosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.tarefasService = tarefasService;
        this.projetosService = projetosService;
        this.filtroTarefas = {};
        this.projetos = projetosService.getProjetos();
        this.tarefas = tarefasService.getTarefas();
    }
    TarefasPage.prototype.nomeProjeto = function (c) {
        for (var i = 0; i < this.projetos.length; i++)
            if (this.projetos[i].codigo == c)
                return this.projetos[i].nome;
        return "Projeto não encontrado";
    };
    TarefasPage.prototype.selecionaTarefa = function (c) {
        var t = parseInt(c);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tarefa_tarefa__["a" /* TarefaPage */], { codigo: t, novo: false });
    };
    TarefasPage.prototype.novaTarefa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tarefa_tarefa__["a" /* TarefaPage */], { codigo: 0, novo: true });
    };
    TarefasPage.prototype.limpaFiltros = function () {
        this.filtroTarefas = {};
        this.menuCtrl.close();
    };
    TarefasPage.prototype.filtroProjeto = function (c) {
        this.filtroTarefas = { projeto: c };
        this.menuCtrl.close();
    };
    TarefasPage.prototype.filtroDias = function (d) {
        this.filtroTarefas = { dias: d };
        this.menuCtrl.close();
    };
    return TarefasPage;
}());
TarefasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tarefas',template:/*ion-inline-start:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/tarefas/tarefas.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Tarefas</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-menu type="overlay" [content]="menucontent">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Filtros</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <ion-item-group>\n                <button ion-item (click)="limpaFiltros()">Todas</button>\n                <button ion-item (click)="filtroDias(0)">Até hoje</button>\n                <button ion-item (click)="filtroDias(1)">Até amanhã</button>\n                <button ion-item (click)="filtroDias(7)">Até a próxima semana</button>\n            </ion-item-group>\n\n            <ion-item-group>\n                <ion-item-divider class="light">POR PROJETO</ion-item-divider>\n                <button ion-item *ngFor="let p of projetos" (click)="filtroProjeto(p.codigo)">{{p.nome}}</button>\n            </ion-item-group>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #menucontent [root]="rootPage"></ion-nav>\n<ion-content padding>\n    <ion-list>\n        <button ion-item *ngFor="let t of tarefas | filtro: filtroTarefas" (click)="selecionaTarefa(t.codigo)">\n      <h2>{{t.descricao}}</h2>\n      <h3>{{nomeProjeto(t.projeto)}}</h3>\n      <p>{{t.data | date:\'dd/MM/yyyy\'}}</p>\n      <ion-badge item-right [class.alta]="t.prioridade==1" [class.media]="t.prioridade==2" [class.baixa]="t.prioridade==3">{{t.prioridade}}</ion-badge>\n    </button>\n    </ion-list>\n    <div id="mais" text-center>\n        <button ion-button round color="primary" (click)="novaTarefa()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/tarefas/tarefas.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_tarefas_service_tarefas_service__["a" /* TarefasService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_projetos_service_projetos_service__["a" /* ProjetosService */]])
], TarefasPage);

var Filtro = (function () {
    function Filtro() {
    }
    Filtro.prototype.transform = function (itens, filtro) {
        itens.sort(function (a, b) { return a.data - b.data; });
        if (filtro.projeto >= 0) {
            return itens.filter(function (item) { return item.projeto == filtro.projeto; });
        }
        else if (filtro.dias >= 0) {
            var d_1 = new Date((new Date()).getTime() + filtro.dias * 24 * 60 * 60 * 1000);
            return itens.filter(function (item) { return item.data <= d_1; });
        }
        else
            return itens;
    };
    return Filtro;
}());
Filtro = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'filtro'
    })
], Filtro);

//# sourceMappingURL=tarefas.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TarefaPage = (function () {
    function TarefaPage(navCtrl, navParams, tarefasService, projetosService, calendar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tarefasService = tarefasService;
        this.projetosService = projetosService;
        this.calendar = calendar;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */];
        this.projetos = projetosService.getProjetos();
        this.codigoTarefa = navParams.get('codigo');
        this.novo = navParams.get('novo');
        if (!this.novo) {
            var tarefas = tarefasService.getTarefas();
            for (var i = 0; i < tarefas.length; i++) {
                if (tarefas[i].codigo == this.codigoTarefa) {
                    this.codigoProjeto = tarefas[i].projeto;
                    this.descricao = tarefas[i].descricao;
                    this.prioridade = tarefas[i].prioridade;
                    var d = tarefas[i].data;
                    this.data = d.getFullYear() + "-" +
                        ("0" + (d.getMonth() + 1)).substr(-2, 2) + "-" +
                        ("0" + d.getDate()).substr(-2, 2);
                }
            }
        }
        else {
            this.codigoProjeto = this.projetos[0].codigo;
            this.descricao = '';
            this.prioridade = 3;
            var d = new Date();
            this.data = d.getFullYear() + "-" +
                ("0" + (d.getMonth() + 1)).substr(-2, 2) + "-" +
                ("0" + d.getDate()).substr(-2, 2);
        }
    }
    TarefaPage.prototype.alterar = function () {
        var d = new Date(parseInt(this.data.substr(0, 4)), parseInt(this.data.substr(5, 2)), parseInt(this.data.substr(8, 2)));
        this.tarefasService.editTarefa(this.codigoTarefa, this.codigoProjeto, this.descricao, d, this.prioridade);
        this.navCtrl.pop();
    };
    TarefaPage.prototype.excluir = function () {
        this.deletarTarefaCalendario(this.codigoTarefa);
        this.tarefasService.deleteTarefa(this.codigoTarefa);
        this.navCtrl.pop();
    };
    TarefaPage.prototype.incluir = function () {
        var d = new Date(parseInt(this.data.substr(0, 4)), parseInt(this.data.substr(5, 2)), parseInt(this.data.substr(8, 2)));
        this.tarefasService.addTarefa(this.codigoProjeto, this.descricao, d, this.prioridade);
        this.incluirTarefaCalendario(this.descricao, d, d);
        this.navCtrl.pop();
    };
    TarefaPage.prototype.incluirTarefaCalendario = function (descricao, datainicio, datafim) {
        this.calendar.requestReadWritePermission();
        this.calendar.createEvent(descricao, null, descricao, datainicio, datafim).then(function (msg) { }, function (err) { });
    };
    TarefaPage.prototype.deletarTarefaCalendario = function (codigoTarefa) {
        var tarefas = this.tarefasService.getTarefas();
        for (var i = 0; i < tarefas.length; i++) {
            if (tarefas[i].codigo == codigoTarefa) {
                this.calendar.deleteEvent(tarefas[i].descricao, null, tarefas[i].descricao, tarefas[i].data, tarefas[i].data).then(function (msg) { }, function (err) { });
            }
        }
    };
    return TarefaPage;
}());
TarefaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tarefa',template:/*ion-inline-start:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/tarefa/tarefa.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Tarefa</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label color="primary">Descrição</ion-label>\n            <ion-input placeholder="Descrição da tarefa" [(ngModel)]="descricao" required name="descricao" #cd="ngModel"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">Projeto</ion-label>\n            <ion-select [(ngModel)]="codigoProjeto">\n                <ion-option *ngFor="let p of projetos" value="{{p.codigo}}">\n                    {{p.nome}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">Data</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" min="2010" max="2030" [(ngModel)]="data"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">Prioridade</ion-label>\n            <ion-select [(ngModel)]="prioridade">\n                <ion-option value="1">Alta</ion-option>\n                <ion-option value="2">Média</ion-option>\n                <ion-option value="3">Baixa</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n    <ion-card *ngIf="!cd.valid && cd.dirty" class="alerta">\n        <ion-card-content>A descrição da tarefa é obrigatória</ion-card-content>\n    </ion-card>\n    <div id="mais">\n        <button ion-button round color="danger" (click)="excluir()" [class.invisivel]="novo"><ion-icon name="trash"></ion-icon></button>\n        <button ion-button round color="primary" (click)="alterar()" [class.invisivel]="novo" [disabled]="!cd.valid"><ion-icon name="checkmark"></ion-icon></button>\n        <button ion-button round color="primary" (click)="incluir()" [class.invisivel]="!novo" [disabled]="!cd.valid"><ion-icon name="checkmark"></ion-icon></button>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/daiane/Projetos/daiane/taskOrganize/src/pages/tarefa/tarefa.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__["a" /* TarefasService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__["a" /* ProjetosService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__["a" /* Calendar */]])
], TarefaPage);

//# sourceMappingURL=tarefa.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_integrante_time_service_integrantes_time_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_calendar__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_projetos_projetos__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_projetos_service_projetos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_projeto_projeto__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_tarefas_service_tarefas_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tarefas_tarefas__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tarefa_tarefa__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_info_info__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_projetos_projetos__["a" /* ProjetosPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_projeto_projeto__["a" /* ProjetoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tarefa_tarefa__["a" /* TarefaPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tarefas_tarefas__["b" /* TarefasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tarefas_tarefas__["a" /* Filtro */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_info_info__["a" /* InfoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_projetos_projetos__["a" /* ProjetosPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_projeto_projeto__["a" /* ProjetoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tarefas_tarefas__["b" /* TarefasPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tarefa_tarefa__["a" /* TarefaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_info_info__["a" /* InfoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_projetos_service_projetos_service__["a" /* ProjetosService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_tarefas_service_tarefas_service__["a" /* TarefasService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_integrante_time_service_integrantes_time_service__["a" /* IntegrantesTimeService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_calendar__["a" /* Calendar */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/daiane/Projetos/daiane/taskOrganize/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/daiane/Projetos/daiane/taskOrganize/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjetosService = (function () {
    function ProjetosService(http) {
        this.http = http;
        this.projetos = [
            { codigo: 1, nome: 'Projeto 1' },
            { codigo: 2, nome: 'Projeto 2' },
            { codigo: 3, nome: 'Projeto 3' }
        ];
        this.ultimoCodigo = 3;
    }
    ProjetosService.prototype.getProjetos = function () {
        return this.projetos;
    };
    ProjetosService.prototype.editProjeto = function (c, n) {
        for (var i = 0; i < this.projetos.length; i++) {
            if (this.projetos[i].codigo == c) {
                this.projetos[i].nome = n;
                break;
            }
        }
    };
    ProjetosService.prototype.deleteProjeto = function (c) {
        for (var i = 0; i < this.projetos.length; i++) {
            if (this.projetos[i].codigo == c) {
                this.projetos.splice(i, 1);
                break;
            }
        }
    };
    ProjetosService.prototype.addProjeto = function (n) {
        this.ultimoCodigo++;
        this.projetos.push({
            codigo: this.ultimoCodigo,
            nome: n
        });
    };
    return ProjetosService;
}());
ProjetosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProjetosService);

//# sourceMappingURL=projetos-service.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map
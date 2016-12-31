"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require("@angular/router/testing");
var testing_2 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var TestRouterComponent = (function () {
    function TestRouterComponent() {
    }
    return TestRouterComponent;
}());
TestRouterComponent = __decorate([
    core_1.Component({
        selector: 'as-test-cmp',
        template: '<div class="title">Hello test</div>'
    }),
    __metadata("design:paramtypes", [])
], TestRouterComponent);
var config = [
    {
        path: '', component: TestRouterComponent
    }
];
describe('AppComponent', function () {
    beforeEach(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [
                TestRouterComponent,
                app_component_1.AppComponent
            ],
            imports: [testing_1.RouterTestingModule, router_1.RouterModule],
            providers: [router_1.provideRoutes(config)]
        });
    });
    it('should have title Hello world', testing_2.async(function () {
        testing_2.TestBed.compileComponents().then(function () {
            var fixture;
            fixture = testing_2.TestBed.createComponent(app_component_1.AppComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            // TODO: find a way to compile the routed component
            // expect(compiled.querySelector('div.title')).toMatch('Hello world');
        });
    }));
});
//# sourceMappingURL=app.component.spec.js.map
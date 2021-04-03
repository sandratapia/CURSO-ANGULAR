import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { title } from "process";
import { AppModule } from "../app.module";
import { HomeComponent } from "./home.component"

describe('HomeComponent', () => {

    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let el: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents()
            .then(()=> {
                fixture = TestBed.createComponent(HomeComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
            })
    }));

    it('should exist the component', () => {
        expect(component).toBeTruthy();
    });

    it('should agree new task', fakeAsync(() => {
        setINputValue('.form-control.autor','pruebaAutor2');
        setINputValue('.form-control.titulo','pruebaTitulo');
        setINputValue('.form-control.descripcion','pruebaDescripcion');

        const boton = el.query(By.css('.btn.btn-success'));
        boton.nativeElement.click();
        tick();
        fixture.detectChanges();

        const card = el.query(By.css('.card:first-child'));
        const title = card.query(By.css('.card-title'));
        const description = card.query(By.css('.card-text'));

        
        expect(card).toBeTruthy();
        expect(title.nativeElement.textContent).toBe('pruebaTitulo');
        expect(description.nativeElement.textContent).toBe('pruebaDescripcion');
    }));

    function setINputValue(selector: string, value: string){
        fixture.detectChanges();
        tick();

        const inputAutor = el.query(By.css(selector));
        inputAutor.nativeElement.value = value;
        inputAutor.nativeElement.dispatchEvent(new Event ('input'));
        tick();
    }
});
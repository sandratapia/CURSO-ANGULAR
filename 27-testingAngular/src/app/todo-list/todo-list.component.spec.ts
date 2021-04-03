import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppModule } from "../app.module";
import { TODOS } from "../test-data/todo.db";
import { TodoListComponent } from "./todo-list.component"

describe('TodoListComponent', () => {

    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;
    let el: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(TodoListComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
            });
    }));

    it('The component should exist', () => {
        expect(component).toBeTruthy();
    });

    it('should show the list of tasks', () => {
        component.todos = TODOS;
        fixture.detectChanges();

        const cards = el.queryAll(By.css('.card'));

        expect(cards).toBeTruthy('The cards cannot be recovered');
        expect(cards.length).toBe(3, 'Should be 3 cards');
    });

    it('Should show the first task', () => {
        component.todos = TODOS;
        fixture.detectChanges();

        const todo = TODOS[0];
        const card = el.query(By.css('.card:first-child'));
        const titulo = card.query(By.css('.card-title'));
        const description = card.query(By.css('.card-text'));

        expect(card).toBeTruthy('The card should exist');
        expect(titulo.nativeElement.textContent).toBe(todo.titulo, 'The title should be the same');
        expect(description.nativeElement.textContent).toBe(todo.descripcion, 'The description should be the same');
    });
})
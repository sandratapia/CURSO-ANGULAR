import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./logger.service";
import { TODOS } from "./test-data/todo.db";
import { TodoService } from "./todo.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"

describe('TodoService', () => {

    let todoService: TodoService;
    let loggerSpy: any;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        const loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                TodoService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        });
        todoService = TestBed.inject(TodoService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })

    it('should add a new task ', () => {

        todoService.add({autor: 'PruebaAutor', titulo: 'PruebaTitulo', descripcion: 'PruebaDescripción'});
        
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

        expect(todoService.todos.length).toBe(1, 'We should have one task');
        expect(todoService.todos[0].id).toBe(1, 'The id self-incremental should be 1');
        expect(todoService.autoIncrementId).toBe(2, 'The self-incremental should have advanced');
        expect(todoService.todos[0].titulo).toEqual('PruebaTitulo', 'The title should be equal that the title of the proof');
    });

    it('should delete a task', () => {

        const todoBorrar = [...TODOS];

        todoService.todos = todoBorrar;

        todoService.delete(2);

        expect(todoService.todos.length).toBe(2, 'The number of tasks should be 2');
        expect(todoService.todos[1].autor).toEqual('Sara');
    });

    it('should retrieve all tasks', () => {
        todoService.getAll().subscribe(todos => {
            expect(todos).toBeTruthy('The tasks don´t exist');
            expect(todos.length).toBe(3, 'The length should be 3 tasks');

            const todo = todos.find(item => item.id === 2);
            expect(todo.titulo).toEqual('Compra de mueble', 'The title should be the one specified in the tests');
        });
        const req = httpTestingController.expectOne('http://localhost:3000/api/todos/all');

        expect(req.request.method).toBe('GET');
        req.flush(TODOS);
    });

    it('should retrieve a single task', () => {
        todoService.getById(2).subscribe(todo => {
            expect(todo).toBeTruthy('The task must exist');
            expect(todo.id).toBe(2, 'The id of the task should be 2');
        });

        const req = httpTestingController.expectOne('http://localhost:3000/api/todos/2')
        expect(req.request.method).toBe('GET');
        req.flush(TODOS[1]);
    });

    afterEach(()=> {
        httpTestingController.verify();
    })
});
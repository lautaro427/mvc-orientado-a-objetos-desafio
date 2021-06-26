import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
    const contactController = new ContactsController();
    const contactCollect = new ContactsCollection();
    contactCollect.load();
    t.deepEqual(contactCollect.data, contactController.contacts.data);
});

test("Testeo el método processOptions", (t) => {
    const controlador = new ContactsControllerOptions();
    controlador.action = "get";
    controlador.params = {id: 2};

    const contactControl = new ContactsController();
    const resultado = contactControl.processOptions(controlador);

    const contactoCollect = new ContactsCollection();
    contactoCollect.load();
    const resultado2 = contactoCollect.getOneById (2);
    t.deepEqual(resultado, resultado2);
});

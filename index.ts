import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
import { ContactsCollection } from "./models";

function parseaParams(argv): ContactsControllerOptions {
  const parseado = minimist(argv);
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: parseado.action,
    params: JSON.parse(parseado.params),
  };
}

function main() {
  const control = new ContactsController();
  const params = parseaParams(process.argv.slice(2));

  console.log(control.processOptions(params));
}

main();

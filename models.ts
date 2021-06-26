
import * as jsonfile from "jsonfile"; 
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load(){
    const datosJson = jsonfile.readFileSync("/contact.json");
    this.data = datosJson;
  }
  getAll(){
    return this.data;
  }
  addOne(contact: Contact){
    this.data.push(contact); 
  }
  save(){
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id:number):Contact{
    return this.data.find((c) => c.id == id);
  }

}
export { ContactsCollection };

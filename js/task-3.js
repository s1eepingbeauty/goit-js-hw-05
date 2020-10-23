 // Write code under this line
 class Storage {
     constructor (item) {
         this.items = item;
     }
     getItems(){
        return this.items;
     }
     addItem (item){
        return this.items.push(item);
     }
     removeItem (item){
         for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i].includes(item)){
                this.items.splice(i, 1);
            }
        }
     }
 } 

 console.log(typeof Storage);
 // 'function'
 
 const goods = [
   'Нанитоиды',
   'Пролонгер',
   'Железные жупи',
   'Антигравитатор'
 ];
 
 const storage = new Storage(goods);
 
 console.log(storage.getItems());
 /* [
   'Нанитоиды',
   'Пролонгер',
   'Железные жупи',
   'Антигравитатор'
 ] */
 
 storage.addItem('Дроид');
 console.log(storage.getItems());
 /* [
   'Нанитоиды',
   'Пролонгер',
   'Железные жупи',
   'Антигравитатор',
   'Дроид'
 ] */
 
 storage.removeItem('Пролонгер');
 console.log(storage.getItems());
 /* [
   'Нанитоиды',
   'Железные жупи',
   'Антигравитатор',
   'Дроид'
 ] */
 
 
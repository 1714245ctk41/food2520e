export const FindProductDetail = (products, idF) => {
    var item
    for(let x in products){
        item = products[x].items.find(element => element.id + '' === idF)
       if (item !== undefined) {
         break
       }
     }
     return item
}

export const FindProductRelated = (products, idF) => {
  var item
    for(let x in products){
        item = products[x].items.find(element => element.id + '' === idF)
       if (item !== undefined) {
         item = products[x]
         break
       }
     }
     return item
}
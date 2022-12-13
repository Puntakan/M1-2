const { template } = require('@babel/core')
//write your student id, firstname, and lastname herefunction getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
 if(allItems===null ||allItems===undefined)return undefined if(allItems.length===0)return []
 if(rowsPerPage<=0)return allItems if(currentPage<=0)return allItems const itemsOnCurrentPage=allItems.slice(rowsPerPage*currentPage-rowsPerPage, rowsPerPage*currentPage)
 return itemsOnCurrentPage.length===0?[]:itemsOnCurrentPage}
module.exports = getItemsOfCurrentPage

angular.module('helpers')
  .factory('smartTree', ['$q', '$log', function ($q, $log) {

    /**
     * Function for recursive creation of tree
     * @param newTree
     * @param item
     */
    function create(newTree, item) {
      if (item.parentId > 0) {
        var parent = newTree.find(function (newTreeItem) {
          return newTreeItem.id == item.parentId;
        });
        if (parent) {
          parent.children = parent.children ? parent.children : [];
          parent.expanded = true;
          parent.children.push({
            "id": item.id,
            "name": item.name
          });
        } else {
          newTree.forEach(function (newTreeItem) {
            if (newTreeItem.children) {
              create(newTreeItem.children, item)
            }
          })
        }
      }
      else {
        newTree.push({
          "id": item.id,
          "name": item.name,
          "firstLevel": true
        })
      }
    }
    
    /**
     * Function for flattening tree
     * @param newList
     * @param treeItem
     */
    function flatten (newList, treeItem) {
      if(treeItem.children && treeItem.children.length) {
        treeItem.children.forEach(function(child) {
          if(child.children) {
            flatten(newList, child);
          }
          else {
            var newItem = angular.copy(child);
            delete newItem.children;
            newList.push(newItem);
          }
        })
      }
      var newItem = angular.copy(treeItem);
      delete newItem.children;
      newList.push(newItem);
    }

    return {
      create: create,
      flatten: flatten
    };
  }]);

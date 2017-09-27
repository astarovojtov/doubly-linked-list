const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;

      return this
    }
    
    head() {
        return this._head ? this._head.data : null
    }

    tail() {
        return this._tail ? this._tail.data : null
    }

    append(data) {
      var node = new Node;
          node.data = data;
          node.next = null;

      if ( this.length > 0 ) {

        let oldTail = this._tail;
        oldTail.next = node;
        this._tail = node;
        node.prev = oldTail;
            
      } else {

        this._head = node;
        this._tail = node;

      }

      this.length += 1;

      return this
    }

    nodeAt(index) {
      var current = this._head;
      var count = 0;
      
      if (index > this.length) {
        return ('Doesn\'t exist')
      } else {
        
        while (count < index) {
          current = current.next;
          count++;
        }   
        
      }
      
      return current;
    }
    
    at(index) {
      return this.nodeAt(index).data;
    }

    isEmpty() {
      return this.length === 0;
    }

    clear() {

      this._head = null;
      this._tail = null;
      this.length = 0;
      
      return this
    }

    indexOf(data) {

        var current = this._head;
        var index = 0;

        while ( index < this.length ) {
        
          if (current.data == data ) {
            return index 
          } else {
              
            current = current.next;
            index++;

          }
        }

        return -1 
    }
    
    insertAt(index, data) {
      
      var existingNode = this.nodeAt(index);
      var insertedNode = new Node;
      insertedNode.data = data;
          
      if (index == 0) {

        insertedNode.prev = null;
        insertedNode.next = this._head;
        this._head = insertedNode;

      } else if (index == this.length) {

        insertedNode.next = null;
        insertedNode.prev = this._tail;
        insertedNode.prev.next = insertedNode;
        this._tail = insertedNode;

      } else {

        insertedNode = new Node(data, this.nodeAt(index-1), this.nodeAt(index));
        this.nodeAt(index-1).next = insertedNode;
        existingNode.prev = insertedNode;
      }
      
      this.length++;

      return this
    }
    
    deleteAt(index) {
      var deletedNode = this.nodeAt(index);
      
      if (this.length > 1) {

        if (index == 0) {

            deletedNode.next.prev = null;
            this._head = deletedNode.next;

        } else if (index == this.length-1) {

            deletedNode.prev.next = null;
            this._tail = deletedNode.prev;

        } else { 

            this.nodeAt(index+1).prev = deletedNode.prev;
            deletedNode.prev.next = deletedNode.next;
        }

      } else {

        this._head = null;
        this._tail = null;

      }
      
      this.length--

      return this
    }

    reverse() {
        var current = this._head;
      var index = 1;
      var temp = {};
        while( index <= this.length ) {
         temp = current.next
         current.next = current.prev;
         current.prev = temp;
         current = temp;
         index++
      }
      temp = this._head;
      this._head = this._tail;
      this._tail = temp;

      return this;      
    }
}

module.exports = LinkedList;
import { Node } from "./node-class.js";

export class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data){
        const newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;

        if(!this.head){
            this.tail = newNode;
        }
        this.size++;
    }

    at(index){
        if (index < 0 || index >= this.size){
            return null;
        }

        let current = this.head;
        let counter = 0;

        while(current){
            if (counter === index){
                return current;
            }

            current = current.next;
            counter++;
        }

        return null;
    }

    pop(){
        if (this.size === 0){
            return;
        }

        else if (this.size == 1){
            const poppedNode = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return poppedNode;
        }

        let current = this.head;

        while (current.next !== this.tail){
            current = current.next;
        }

        const poppedNode = this.tail;
        this.tail = current;
        this.tail.next = null
        this.size--;
        return poppedNode;
    }

    contains(data){
        if (this.size === 0){
            return false;
        }

        let current = this.head;
        
        while (current){
            if (current.data === data){
                return true;
            }
            current = current.next;
        }

        return false;
    }

    findIndex(data){
        if (this.size === 0){
            return;
        }

        let current = this.head;
        let index = 0;

        while (current){
            if (current.data === data){
                return index;
            }

            current = current.next;
            index++;
        }

        return "This data does not exist in the list."
    }

    toString(){
        if (this.size === 0){
            return null;
        }

        let current = this.head;
        let result = "";

        while(current){
            if(current){
                result += `(${current.data}) -> `;
            }

            current = current.next;
        }

        result += "null";
        return result;
    }

    insertAt(data, index){
        if (this.size === 0){
            this.prepend(data);
        }

        else if (index >= this.size){
            this.append(data);
        }
        
        const newNode = new Node(data);
        let current = this.head;
        let previous;

        let counter = 0;
        while(counter < index){
            previous = current;
            current = current.next;
            counter++;
        }

        previous.next = newNode;
        newNode.next = current;

        this.size++;
    }

    removeAt(index){
        if (index < 0 || index >= this.size){
            return null;
        }
       
        let current = this.head;

        if (index === 0){
            this.head = current.next;
            if (this.size === 1){
                this.tail = null;
            }
        }

        else{   
            let previous;
            let counter = 0;

            while (counter < index){
                previous = current;
                current = current.next;
                counter++;
            }

            previous.next = current.next;

            if (current === this.tail){
                this.tail = previous;
            }
        }

       this.size--;
       return current;
    }

    get getSize(){
        return this.size;
    }

    get getHead(){
        return this.head;
    }

    get getTail(){
        return this.tail;
    }

}
import Node from './Node'

class LinkedList<T>{
    head:Node<T> | null
    constructor(){
        this.head = null;
    }
    insertAtBeginning = (data:T)=>{
        let newNode = new Node<T>(data)
        newNode.next = this.head;
        this.head= newNode;
        return this.head;
    }
    insertAtEnd =(data:T)=>{
        let newNode = new Node<T>(data)
        if(!this.head){
            this.head = newNode;
            return this.head;
        }
        let tail = this.head;
        while(tail.next !==null){
            tail = tail.next;
        }
        tail.next=newNode;
        return this.head;
    }
    getAt = (index:number)=>{
        let counter =0;
        let node = this.head;
        while(node){
            if(counter===index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    insertAt = (data:T,index:number)=>{
        if(!this.head){
            this.head = new Node<T>(data);
            return;
        }
        if(index===0){
            this.head=new Node<T>(data,this.head)
            return;
        }
        const previous = this.getAt(index-1)
        if(previous){
            let newNode = new Node<T>(data)
            newNode.next = previous.next;
            previous.next = newNode;
            return this.head;
        }
        return;
    }
    deleteFirst = ()=>{
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    }
    deleteLast = ()=>{
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let previous = this.head;
        let tail= this.head.next;
        while(tail.next !==null){
            previous = tail;
            tail = tail.next;
        }
        previous.next = null;
        return this.head;
    }
    deleteAt = (index:number)=>{
        if(!this.head){
            return;
        }
        if(index===0){
            this.head=this.head.next;
            return;
        }
        const previous = this.getAt(index-1);
        if(!previous||!previous.next){
            return;
        }
        previous.next = previous.next.next
        return this.head;
    }
    clear = ()=>{
        this.head=null;
    }
    toArray= ()=>{
        const arr:T[] = [];
        let tail = this.head;
        while(tail){
            arr.push(tail.data)
            tail = tail.next
        }
        return arr;
    }
    
}
export default LinkedList;
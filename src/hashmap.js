import { LinkedList } from "./linked-list.js";

export const HashMap = () => {
    let loadFactor = 0.75;
    let capacity = 16;
    let size = 0;
    let table = new Array(capacity);

    const hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++){
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }

        return hashCode;
    }
    
    const resize = () => {
        const oldTable = table;
        capacity *= 2;
        table = new Array(capacity);
        size = 0;

        oldTable.forEach(bucket => {
            if (bucket){
                let current = bucket.getHead;
                while (current){
                    set(current.data.key, current.data.value);
                    current = current.next;
                }
            }
        });
    }

    const set = (key, value) => {
        if (size / capacity >= loadFactor){
            resize();
        }

        const index = hash(key);

        if(!table[index]){
            table[index] = new LinkedList();
        }
        
        
        let current = table[index].getHead;
        while (current){
            if (current.data.key === key){
                current.data.value = value;
                return;
            }
            current = current.next;
        }

        table[index].append({key, value});
        size++;
    }

    const get = (key) => {
        const index = hash(key);

        if (!table[index]){
            return undefined;
        }

        let current = table[index].getHead;
        while (current) {
            if (current.data.key === key){
                return current.data.value;
            }
            current = current.next;

            return undefined;
        }
    }

    const has = (key) => {
        const index = hash(key);

        let current = table[index].getHead;
        while (current){
            if (current.data.key === key){
                return true;
            }
            current = current.nextl
        }

        return false;
    }

    const remove = (key) => {
      const index = hash(key);

      if (!table[index]){
        return false;
      }

      let current = table[index].getHead;
      let position = 0;

      while (current){
        if (current.data.key === key){
            table[index].removeAt(position);
            size--;
            return true;
        }

        current = current.next;
        position++;
      }

      return false;
    }

    const length = () => {
        return size;
    }

    const clear = () => {
        table = new Array(capacity);
        size = 0;
    }

    const keys = () => {
        const keyArray = [];

        table.forEach(bucket => {
            let current = bucket.getHead;
            while (current){
                keyArray.push(current.data.key);
                current = current.next;
            }
        });

        return keyArray;
    }

    const values = () => {
        const valueArray = [];

        table.forEach(bucket => {
            let current = bucket.getHead;
            while (current){
                valueArray.push(current.data.value);
                current = current.next;
            }
        });

        return valueArray;
    }


    const entries = () => {
        const entriesArray = [];
        
        table.forEach(bucket => {
            if (bucket){
                let current = bucket.getHead;
                while (current){
                    entriesArray.push([current.data.key, current.data.value]);
                    current = current.next;
                }
            }
        });

        return entriesArray;
    }

    const getCapacity = () => {
        return capacity;
    }

    return {
        loadFactor,
        getCapacity,
        size,
        table,
        hash,
        resize,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    }
}
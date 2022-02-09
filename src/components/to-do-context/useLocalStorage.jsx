import React from 'react';

const useLocalStorage = (itemName, initialValue) => {
        const [error, setError] = React.useState(false);
        const [loading, setLoading] = React.useState(true);
        const [itemsValue, setItemsValue] = React.useState(initialValue);

        React.useEffect(() => {
          setTimeout(() => {
            try {
              const localStorageItem = localStorage.getItem(itemName);
              let parsedItem;
      
              if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
              } else {
                parsedItem = JSON.parse(localStorageItem);
              }
              setItemsValue(parsedItem);
              setLoading(false);
            } catch (error) {
              setError(error);
            }
          }, 1500);
        });
      
        const saveItems = (newItem) => {
          try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItemsValue(newItem);
          } catch (error) {
            setError(error);
          }
        };
      
        return {
          itemsValue,
          saveItems,
          loading,
          error,
        };
      };

export { useLocalStorage };

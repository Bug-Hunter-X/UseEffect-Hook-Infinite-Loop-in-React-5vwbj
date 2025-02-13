```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Setting state within the effect without dependency array
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```
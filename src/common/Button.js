export default function Button(props) {
    const {clicking} = props;
    return (
        <div>
            <button onClick={clicking} className="bg-red-300">I'm a button</button>
        </div>
    
)}
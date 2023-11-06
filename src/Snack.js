import { Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
const snacks = ['chips', 'sardines', 'soda'];

function Snack() {
    //  const [chipsEaten, setChipsEaten] = useState(0);
    const { snack } = useParams();

    if (!snacks.includes(snack)) {
        return <Navigate to="/" />;
    }

    // const chipsSection = (
    //     <>
    //         <h2>Bags eaten {chipsEaten}</h2>
    //         <button onClick={eatChip}>More Chips</button>
    //     </>
    // );

    return (<div className={snack}>
        <div>{snack}</div>
        {snack === "chips" && "blah"}
        <Link to="/">Go back</Link>
    </div>);
}

export default Snack;
import React from 'react';

const Theory = () => {
    return (
        <div>
            <h4>How react works?</h4>
            <p>Answer: React is a declarative language. It has several things that make the react more efficient. React is processing up to down (one way). React is component based libray. Components are used to write the html type code in a single file then needs to intregate in app.js. React also has useState that is used for set the primary value and a function where the changable value can serve for the first one. It has also an useEffect which is used for load data from various sources. React starts with the first component to the last component to show the DOM output to the user. React also creates a Virtual DOM for keep the track when the data has changed.   </p>

            <h4>Props vs state</h4>
            <p>Answer: props is very important in react. It is needed to pass data, function anything to other Components.So that any component can able to complete its task. Moreover, props is changeble depending on the needs.
                
            On the other hand, state is act like a local state. Here any kinds of data manupulation is not allowed by the other components. it is data that changes overtime.
             </p>
        </div>
    );
};

export default Theory;
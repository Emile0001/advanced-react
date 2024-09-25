const ErrorExample = () => {
    let count = 0;
    function increaseCount() {
        count += 1;
        console.log(count);
    }
    return (
        <>
            <h2>useState error example</h2>
            <button className="btn" type="button" onClick={increaseCount}>
                Increase
            </button>
            <h2>{count}</h2>
        </>
    );
};

export default ErrorExample;

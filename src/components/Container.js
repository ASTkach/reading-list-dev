const Container = ({ children, hiddenClass }) => {
    return <div className={`${'container ' + hiddenClass}`}>{children}</div>;
};

export default Container;

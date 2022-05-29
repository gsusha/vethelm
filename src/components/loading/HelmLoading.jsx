import ReactLoading from 'react-loading';

function HelmLoading() {
    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ReactLoading type={'spin'} color={'#1F9F84'} />
        </div>
    );
}

export default HelmLoading;

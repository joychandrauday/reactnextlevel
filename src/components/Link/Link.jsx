import PropTypes from 'prop-types'; 

const Link = ({route}) => {
    const {path,name}=route;
    return (
        <li className='text-center mx-4 md:hover:bg-transparent hover:bg-yellow-500 hover:text-black rounded cursor-pointer py-2' >
            <a href={route.path} className='justify-center'>{route.name}</a>
        </li>
    );
};
Link.propTypes={
    route:PropTypes.object
}
export default Link;
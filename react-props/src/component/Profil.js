import PropTypes from 'prop-types'; 



function Profil({fullname,bio,profession,children,handleName}){
    return(
        <div>
<h1>{fullname}</h1>
<p>
    {bio}
</p>
<h2>{profession} </h2>
{children}

{handleName(fullname)}



</div>
    )
}
Profil.defaultProps={
handleName:()=>alert("Hello World")
}
Profil.propTypes={
    fullname:PropTypes.object.isRequired,
    bio:PropTypes.object.isRequired,
    profession:PropTypes.object.isRequired,
    handleAlert:PropTypes.func
    }
    


export default Profil
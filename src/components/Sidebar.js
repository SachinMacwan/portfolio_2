import React from 'react';
import "./Sidebar.css"

const Sidebar = props => {
    return (
        <>
            <div id='a' className='main_side_div' > 
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <div class="icon-bar"> 
                    <a href={'mailto:s.macwan794@gmail.com'} class="envelope"><i class="fa fa-envelope"></i></a> 
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sachin-macwan-727352163/" class="linkedin"><i class="fa fa-linkedin"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Sach7n" class="github"><i class="fa fa-github"></i></a> 
                    
                    </div>
            
            </div>

        </>
    );
};

export default Sidebar;


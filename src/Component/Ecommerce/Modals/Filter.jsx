import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { useNavigate } from 'react-router-dom';
import { ProductSidebar } from '../product/ProductSidebar';

const Filter = ({toggleDrawerFilter,openDrawerFilter}) => {
    
   
    const DrawerList = (
        <Box sx={{ width: 350 }} role="presentation" >

            <ProductSidebar/>

        </Box>
    );

    return (
        <div>

            <Drawer open={openDrawerFilter} onClose={toggleDrawerFilter(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default Filter
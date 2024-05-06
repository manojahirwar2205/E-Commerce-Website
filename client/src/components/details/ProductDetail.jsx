import { Fragment } from "react";

import { Typography, Box, Table, TableBody, TableRow, TableCell, styled} from "@mui/material";

import { LocalOffer as  Badge } from '@mui/icons-material';

const Smalltext = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyleBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));
    return (
        <Fragment>
         <Typography>{product.title.longTitle}</Typography>
         <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
            8 Ratings & 1 Reviews
            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
         </Typography>
         <Typography>
         <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
         <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
         <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
         </Typography>
          <Typography>Available Offers</Typography>
          <Smalltext>
            <Typography><StyleBadge />Get extra 20% off upto ₹50 on 1 item(s) T&C</Typography>
            <Typography><StyleBadge />Get extra 13% off (price inclusive of discount) T&C</Typography>
            <Typography><StyleBadge />Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100* Know More</Typography>
            <Typography><StyleBadge />Buuy 2 Items save 5%;Buy 3 or more save 10% T&C</Typography>
            <Typography><StyleBadge />5% Caseback on Flipkart Axis Bank Card </Typography>
            <Typography><StyleBadge />No Cost EMI on Bajaj Finsery EMI Card on value above ₹2999 T&C</Typography>
          </Smalltext>
          <Table>
              <TableBody>
                   <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by{date.toDateString()} | ₹40</TableCell>
                   </ColumnText>
                   <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                   </ColumnText>
                   <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                             <Box component="span" style={{ color: '#2874f0' }}>SuperComNet</Box>
                             <Typography>GST Involve available</Typography>
                             <Typography>View more sellers starting from </Typography>
                        </TableCell>
                   </ColumnText>
                   <ColumnText>
                        <TableCell colSpan={2}>
                             <img src={adURL} style={{ width: 390 }} alt="flipkartpoints" />
                        </TableCell>
                   </ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
              </TableBody>
          </Table>
        </Fragment>
    )
}

export default ProductDetail;
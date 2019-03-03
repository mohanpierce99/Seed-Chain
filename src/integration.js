import Web3 from './web3';

let addressuser = '0x8175E318cFEF1Ec54ed444138A1FD091AdB4e5c8';
let abiuser =[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"owners","outputs":[{"name":"name","type":"string"},{"name":"is_manufacturer","type":"bool"},{"name":"ph_no","type":"uint256"},{"name":"mail","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"getOwns","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_man","type":"bool"},{"name":"_pno","type":"uint256"},{"name":"_mail","type":"string"}],"name":"createUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"verify","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ownership","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getdetails","outputs":[{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"rec","type":"address"},{"name":"_padd","type":"address"}],"name":"transact","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"checkMan","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_account","type":"address"}],"name":"createAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
let abiitem =[{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"track","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getState","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"assetarray","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"curaddress","type":"address"},{"name":"paradd","type":"address"}],"name":"assign_parid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"trackChain","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"i","type":"address"}],"name":"verify","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"itemCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address[]"},{"name":"par","type":"address"}],"name":"createBatch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getdetails","outputs":[{"name":"","type":"string"},{"name":"","type":"uint32"},{"name":"","type":"uint32"},{"name":"","type":"uint32"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"assetlist","outputs":[{"name":"name","type":"string"},{"name":"weight","type":"uint32"},{"name":"date","type":"uint32"},{"name":"expd","type":"uint32"},{"name":"parid","type":"address"},{"name":"dis","type":"bool"},{"name":"ispacket","type":"bool"},{"name":"is_batched","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_account","type":"address"}],"name":"finalize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_ispacket","type":"bool"},{"name":"_name","type":"string"},{"name":"_weight","type":"uint32"},{"name":"_date","type":"uint32"},{"name":"_expd","type":"uint32"}],"name":"createAsset","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"id","type":"address"},{"name":"_date","type":"uint256"},{"name":"_account","type":"address"}],"name":"transact","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
let addressitem = '0x3023e5dD5c5F46085e0ac1A978a505682a792706';
var user = new Web3.eth.Contract(abiuser, addressuser);
console.log(user.methods);
var item = new Web3.eth.Contract(abiitem, addressitem);



var publicApi = {
    user,
    item
};
export default publicApi;
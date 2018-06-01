'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Customer.json';
var bodyParam = 'customers/v1'; 
     


exports.getCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var CustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var CustomerData = [];
    if(CustomerFD) {
        CustomerData = JSON.parse(CustomerFD);
    }
    cb(null, CustomerData);
}
exports.getCustomerById = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var id = args['id'] ? args['id'].value: null;
    var CustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var CustomerData = [];
    if(CustomerFD) {
        CustomerData = JSON.parse(CustomerFD);
    }
    var myRecord;
    for(var i=0;i<CustomerData.length;i++) {
        if(CustomerData[i]['id'] == id) {
             myRecord = CustomerData[i];
             break;
        }
    }
    cb(null, myRecord);
}





exports.putCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   var body = args[bodyParam].value;
   var CustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var CustomerData = [];
   if(CustomerFD) {
       CustomerData = JSON.parse(CustomerFD);
   }
   var myRecord;
   for(var i=0;i<CustomerData.length;i++) {
       if(CustomerData[i]['id'] == id) {
            CustomerData[i] = Object.assign(CustomerData[i],body);
            myRecord = CustomerData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(CustomerData));
   cb(null, myRecord);
}


exports.postCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var CustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var CustomerData = [];
    if(CustomerFD) {
        CustomerData = JSON.parse(CustomerFD);
    }
    CustomerData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(CustomerData));
    cb(null, body);
}


exports.patchCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   var body = args[bodyParam].value;
   var CustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var CustomerData = [];
   if(CustomerFD) {
       CustomerData = JSON.parse(CustomerFD);
   }
   var myRecord;
   for(var i=0;i<CustomerData.length;i++) {
       if(CustomerData[i]['id'] == id) {
            CustomerData[i] = Object.assign(CustomerData[i],body);
            myRecord = CustomerData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(CustomerData));
   cb(null, myRecord);
}



exports.deleteCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   //var body = args[bodyParam].value;
   var CustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var CustomerData = [];
   if(CustomerFD) {
       CustomerData = JSON.parse(CustomerFD);
   }
   var found = false;
   for(var i=0;i<CustomerData.length;i++) {
       if(CustomerData[i]['id'] == id) {
            CustomerData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(CustomerData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}



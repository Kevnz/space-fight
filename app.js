//overriding defaults
require('static-cling').cling({ port: process.env.PORT || 4321, root : './public' });
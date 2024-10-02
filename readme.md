# this is my backend project 
http segement ignore this if you are reading it in my projects readme because this is something that i am learning during my project this is kind of a notes for HTTP 
headers ------
meta data ---- key value pair sent along req,res

---caching,authentication , manage state 
- request headers - from client 
- respose headers - from server  
- representation headers - encoding/compression 
- payload header - data

HTTP methods 
basic set of operations that can be used to interact with server 
GET: retrieve a resource 
HEAD: no message body (response headers only)
TRACE: loopback test (get some data)
DELETE:remove a resource 
PUT: replace a resource 
POST: interact with resource (mostly add)
PATCH:change part of a resource

//Status code 
1XX informational ,100 continuie , 102 processing
2XX success , 200 ok , 201 created , 202 accepted 
3XX redirectional , 307 temporary redirect , 308 permanent redirect
4XX client error , 400 bad request , 401 unauthorized , 402 payment required , 404 not found
5XX server error , 500 internal server error , 504 gateway timeout 

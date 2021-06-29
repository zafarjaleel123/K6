# K6
k6 Performance testing tool
#1_Installation
-> K6 installation
->Create project in github
# Load testing 
k6 run --vus 10 --duration 5s script_path
/*
2.Option
Instead of defining vertual users in CMD we Will write inside the script
export let options = {
    //Declare configration
    vus : 5,
    duration : '5s', //1m5s
}
*/
3.Ramp up and Ramp down time
Mean
10 users for 10s and then after 10s seconds increase  to 20 users for 1 min 

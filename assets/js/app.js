var vm = new Vue({
    el: '#main-content',
    data: {
        title: 'UML Generator'
    },
    ready: function() {

        // GET request
        this.$http.get('/api/classes.json', function (data, status, request) {

            // set data on vm
            this.$set('classes', data);

        }).error(function (data, status, request) {
            console.log("Unable to get classes");
        })

        // GET request
        this.$http.get('/api/workflow.json', function (data, status, request) {
            // set data on vm
            this.$set('workflow', data);

        }).error(function (data, status, request) {
            console.log("Unable to get Workflow");
        })

        // GET request
        this.$http.get('/api/links.json', function (data, status, request) {
            // set data on vm
            this.$set('links', data);

        }).error(function (data, status, request) {
            console.log("Unable to get Workflow");
        })

      }
})
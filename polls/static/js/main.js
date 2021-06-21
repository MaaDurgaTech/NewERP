var app = angular.module('routingEcommerce',['ui.router','ui.bootstrap']);
// var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ngAside', 'ngDraggable', 'flash', 'chart.js', 'ngTagsInput', 'ui.tinymce', 'hljs', 'mwl.confirm', 'ngAudio', 'uiSwitch', 'rzModule' ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
                // For any unmatched url, send to /business
                $urlRouterProvider.otherwise("/")

                $stateProvider
                        .state('ecommerce', {
                            url: "/",
                            templateUrl: "/static/ngTemplates/ecommerce.html",
                            controller: "ecommerce.main"
                        })
                        .state('cart', {
                            url: "/cart",
                            templateUrl: "/static/ngTemplates/cart.html",
                            controller: "ecommerce.cart"
                        })
                        .state('receptions', {
                            url: "/receptions",
                            templateUrl: "/static/ngTemplates/receptions.html",
                            controller: "ecommerce.receptions"
                        })
                        .state('addenq', {
                            url: "/Add Enquiry",
                            templateUrl: "/static/ngTemplates/addenq.html",
                            controller: "ecommerce.addenq"
                        })
                        .state('editenq', {
                            url: "/Edit/:id",
                            templateUrl: "/static/ngTemplates/addenq.html",
                            controller: "ecommerce.addenq"
                        })
                        .state('student', {
                            url: "/student",
                            templateUrl: "/static/ngTemplates/student.html",
                            controller: "ecommerce.student"
                        })
                        .state('addAdmissionForm', {
                            url: "/AdmissionForm",
                            templateUrl: "/static/ngTemplates/addAdmission.html",
                            controller: "ecommerce.addAdmission"
                        })
                        .state('setting', {
                            url: "/Setting",
                            templateUrl: "/static/ngTemplates/setting.html",
                            controller: "ecommerce.setting"
                        })
                        .state('mainSetting', {
                            url: "/mainSetting",
                            templateUrl: "/static/ngTemplates/mainSetting.html",
                            controller: "ecommerce.mainSetting"
                        })
                        .state('class', {
                            url: "/class",
                            templateUrl: "/static/ngTemplates/class.html",
                            controller: "ecommerce.class"
                        })
                        .state('addClass', {
                            url: "/Add Class",
                            templateUrl: "/static/ngTemplates/addClass.html",
                            controller: "ecommerce.addClass"
                        })
                        .state('section', {
                            url: "/Section",
                            templateUrl: "/static/ngTemplates/section.html",
                            controller: "ecommerce.section"
                        })
                        .state('addSection', {
                            url: "/Add Section",
                            templateUrl: "/static/ngTemplates/addSection.html",
                            controller: "ecommerce.addSection"
                        })
                        .state('busRoot', {
                            url: "/Bus Root",
                            templateUrl: "/static/ngTemplates/busRoot.html",
                            controller: "ecommerce.busRoot"
                        })
                        .state('addBusRoot', {
                            url: "/Add BusRoot",
                            templateUrl: "/static/ngTemplates/addBusRoot.html",
                            controller: "ecommerce.addBusRoot"
                        })
                        .state('extraFee', {
                            url: "/Extra Fee",
                            templateUrl: "/static/ngTemplates/extraFee.html",
                            controller: "ecommerce.extraFee"
                        })
                        .state('addExtraFee', {
                            url: "/Add Extra Fee",
                            templateUrl: "/static/ngTemplates/addExtraFee.html",
                            controller: "ecommerce.addExtraFee"
                        })
                        .state('payFee', {
                            url: "/Payfee",
                            templateUrl: "/static/ngTemplates/payFee.html",
                            controller: "ecommerce.payFee"
                        })
                        .state('addPayFee', {
                            url: "/AddPayfee/:id",
                            templateUrl: "/static/ngTemplates/addPayFee.html",
                            controller: "ecommerce.addPayFee"
                        })
                        .state('addHostel', {
                            url: "/Hostel",
                            templateUrl: "/static/ngTemplates/addHostel.html",
                            controller: "ecommerce.addHostel"
                        })
                        .state('addNewHostel', {
                            url: "/Add Hostel",
                            templateUrl: "/static/ngTemplates/addNewHostel.html",
                            controller: "ecommerce.addNewHostel"
                        })
                        .state('income', {
                            url: "/Income",
                            templateUrl: "/static/ngTemplates/income.html",
                            controller: "ecommerce.income"
                        })
                        .state('AddIncome', {
                            url: "/Add Income",
                            templateUrl: "/static/ngTemplates/AddIncome.html",
                            controller: "ecommerce.AddIncome"
                        })
                        .state('expense', {
                            url: "/Expense",
                            templateUrl: "/static/ngTemplates/expense.html",
                            controller: "ecommerce.expense"
                        })
                        .state('addExpense', {
                            url: "/Add Expense",
                            templateUrl: "/static/ngTemplates/addExpense.html",
                            controller: "ecommerce.addExpense"
                        })
                        .state('mode', {
                            url: "/Mode",
                            templateUrl: "/static/ngTemplates/mode.html",
                            controller: "ecommerce.mode"
                        })
                        .state('AddExpenseMode', {
                            url: "/Add Expense Mode",
                            templateUrl: "/static/ngTemplates/AddExpenseMode.html",
                            controller: "ecommerce.AddExpenseMode"
                        })
                        .state('AddIncomeMode', {
                            url: "/Add Income Mode",
                            templateUrl: "/static/ngTemplates/AddIncomeMode.html",
                            controller: "ecommerce.AddIncomeMode"
                        })
                        .state('bank', {
                            url: "/Bank",
                            templateUrl: "/static/ngTemplates/bank.html",
                            controller: "ecommerce.bank"
                        })
                        .state('addbank', {
                            url: "/Add Bank",
                            templateUrl: "/static/ngTemplates/addbank.html",
                            controller: "ecommerce.addbank"
                        })
                        .state('bankdepo', {
                            url: "/Bank Deposite",
                            templateUrl: "/static/ngTemplates/bankdepo.html",
                            controller: "ecommerce.bankdepo"
                        })
                        .state('adddepo', {
                            url: "/Add Deposite",
                            templateUrl: "/static/ngTemplates/adddepo.html",
                            controller: "ecommerce.adddepo"
                        })
                        .state('bankwith', {
                            url: "/Bank Withdraw",
                            templateUrl: "/static/ngTemplates/bankwith.html",
                            controller: "ecommerce.bankwith"
                        })
                        .state('addwith', {
                            url: "/Add Withdraw",
                            templateUrl: "/static/ngTemplates/addwith.html",
                            controller: "ecommerce.addwith"
                        })
                        .state('department', {
                            url: "/Department",
                            templateUrl: "/static/ngTemplates/department.html",
                            controller: "ecommerce.department"
                        })
                        .state('adddepartment', {
                            url: "/Add Department",
                            templateUrl: "/static/ngTemplates/adddepartment.html",
                            controller: "ecommerce.adddepartment"
                        })
                        .state('staff', {
                            url: "/Staff",
                            templateUrl: "/static/ngTemplates/staff.html",
                            controller: "ecommerce.staff"
                        })
                        .state('addstaff', {
                            url: "/Add Staff",
                            templateUrl: "/static/ngTemplates/addstaff.html",
                            controller: "ecommerce.addstaff"
                        })
                        .state('examterm', {
                            url: "/Exam Term",
                            templateUrl: "/static/ngTemplates/examterm.html",
                            controller: "ecommerce.examterm"
                        })
                        .state('addexamterm', {
                            url: "/Add Exam Term",
                            templateUrl: "/static/ngTemplates/addexamterm.html",
                            controller: "ecommerce.addexamterm"
                        })
                        .state('subject', {
                            url: "/Subject",
                            templateUrl: "/static/ngTemplates/subject.html",
                            controller: "ecommerce.subject"
                        })
                        .state('addsubject', {
                            url: "/Add Subject",
                            templateUrl: "/static/ngTemplates/addsubject.html",
                            controller: "ecommerce.addsubject"
                        })
                        .state('addexam', {
                            url: "/Add Exam",
                            templateUrl: "/static/ngTemplates/addexam.html",
                            controller: "ecommerce.addexam"
                        })
                        .state('cc', {
                            url: "/C C",
                            templateUrl: "/static/ngTemplates/cc.html",
                            controller: "ecommerce.cc"
                        })
                        .state('discount', {
                            url: "/Discount",
                            templateUrl: "/static/ngTemplates/discount.html",
                            controller: "ecommerce.discount"
                        })
                        .state('adddiscount', {
                            url: "/AddDiscount/:id",
                            templateUrl: "/static/ngTemplates/adddiscount.html",
                            controller: "ecommerce.adddiscount"
                        })
            }])
  var emptyFile = new File([""], "");
app.controller("main", function($scope, $state, $stateParams, $http, $rootScope , $filter) {
  $scope.len=''
  $scope.enqdata = function(){
    $scope.len=''
    var method = 'GET'
    var url ='/enquiry/receptions/'

    $http({
      method:method,
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:url,
    }).then(function(response){
      $scope.enqdatas = response.data
      $scope.len=$scope.enqdatas.length;
      console.log($scope.len,"data length");
      // $scope.enqdata = response.data.results
      $scope.count = response.data.count
    })
  }
  $scope.enqdata()

  $scope.checkCart = function(){
    if ($rootScope.carttotalProducts==0) {
      alert('OPPS! Please add products in cart')
      return
    }
      $rootScope.addTocart()
      $state.go('cart')
  }

  $scope.receptions = function(){

      // $rootScope.addTocart()
      $state.go('receptions')
  }
  $scope.addEnqForm = function(){

      // $rootScope.addTocart()
      $state.go('addenq')
  }

  $scope.goToMain = function(){
    $state.go('ecommerce')
  }

  $scope.student = function(){

      // $rootScope.addTocart()
      $state.go('student')
  }
  $scope.addAdmissionForm = function(){

      // $rootScope.addTocart()
      $state.go('addAdmissionForm')
  }
  $scope.settingPage = function(){

      // $rootScope.addTocart()
      $state.go('setting')
  }
  $scope.class = function(){

      // $rootScope.addTocart()
      $state.go('class')
  }
  $scope.addClass = function(){

      // $rootScope.addTocart()
      $state.go('addClass')
  }
  $scope.section = function(){

      // $rootScope.addTocart()
      $state.go('section')
  }
  $scope.addSection = function(){

      // $rootScope.addTocart()
      $state.go('addSection')
  }
  $scope.BusRoot = function(){

      // $rootScope.addTocart()
      $state.go('busRoot')
  }
  $scope.addBusRoot = function(){

      // $rootScope.addTocart()
      $state.go('addBusRoot')
  }
  $scope.extraFee = function(){

      // $rootScope.addTocart()
      $state.go('extraFee')
  }
  $scope.addExtraFee = function(){

      // $rootScope.addTocart()
      $state.go('addExtraFee')
  }

  $scope.addHostel = function(){

      // $rootScope.addTocart()
      $state.go('addHostel')
  }
  $scope.addNewHostel = function(){

      // $rootScope.addTocart()
      $state.go('addNewHostel')
  }

  //Acount section Date
  $scope.income = function(){

      // $rootScope.addTocart()
      $state.go('income')
  }
  $scope.AddIncome = function(){

      // $rootScope.addTocart()
      $state.go('AddIncome')
  }
  $scope.expense = function(){

      // $rootScope.addTocart()
      $state.go('expense')
  }
  $scope.addExpense = function(){

      // $rootScope.addTocart()
      $state.go('addExpense')
  }
  $scope.mode = function(){

      // $rootScope.addTocart()
      $state.go('mode')
  }
  $scope.AddExpenseMode = function(){

      // $rootScope.addTocart()
      $state.go('AddExpenseMode')
  }
  $scope.AddIncomeMode = function(){

      // $rootScope.addTocart()
      $state.go('AddIncomeMode')
  }

  $scope.bank = function(){

      // $rootScope.addTocart()
      $state.go('bank')
  }
  $scope.addbank = function(){

      // $rootScope.addTocart()
      $state.go('addbank')
  }
  $scope.bankdepo = function(){

      // $rootScope.addTocart()
      $state.go('bankdepo')
  }
  $scope.adddepo = function(){

      // $rootScope.addTocart()
      $state.go('adddepo')
  }
  $scope.bankwith = function(){

      // $rootScope.addTocart()
      $state.go('bankwith')
  }
  $scope.addwith = function(){

      // $rootScope.addTocart()
      $state.go('addwith')
  }
  $scope.payFee = function(){

      // $rootScope.addTocart()
      $state.go('payFee')
  }
  $scope.department = function(){

      // $rootScope.addTocart()
      $state.go('department')
  }
  $scope.adddepartment = function(){

      // $rootScope.addTocart()
      $state.go('adddepartment')
  }
  $scope.staff = function(){

      // $rootScope.addTocart()
      $state.go('staff')
  }
  $scope.addstaff = function(){

      // $rootScope.addTocart()
      $state.go('addstaff')
  }
  $scope.examterm = function(){

      // $rootScope.addTocart()
      $state.go('examterm')
  }
  $scope.addexamterm = function(){

      // $rootScope.addTocart()
      $state.go('addexamterm')
  }
  $scope.subject = function(){

      // $rootScope.addTocart()
      $state.go('subject')
  }
  $scope.addsubject = function(){

      // $rootScope.addTocart()
      $state.go('addsubject')
  }
  $scope.addexam = function(){

      // $rootScope.addTocart()
      $state.go('addexam')
  }
  $scope.cc = function(){

      // $rootScope.addTocart()
      $state.go('cc')
  }
  $scope.discount = function(){

      // $rootScope.addTocart()
      $state.go('discount')
  }
  $scope.adddiscount = function(i){

      // $rootScope.addTocart()
      $state.go('adddiscount',{id:i})
      // $rootScope.ids=i
      // console.log($scope.ids,"idddd");
  }
  // $scope.mainSetting = function(){
  //
  //     // $rootScope.addTocart()
  //     $state.go('mainSetting')
  // }


})

app.controller("ecommerce.cart", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.sumCart = function(){
    $rootScope.cart_total = 0
    if ($rootScope.cartProducts==undefined || $rootScope.cartProducts.length==0) {
      $state.go('ecommerce')
    }
    else{
      for (var i = 0; i < $rootScope.cartProducts.length; i++) {
        $rootScope.cart_total+=$rootScope.cartProducts[i].price
      }
    }
  }
  $scope.sumCart()
  $scope.removeCart = function(indx){
    $rootScope.cartProducts.splice(indx,1)
    $scope.sumCart()
  }

  $scope.len=''
  $scope.enqdata = function(){
    $scope.len=''
    var method = 'GET'
    var url ='/enquiry/receptions/'

    $http({
      method:method,
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:url,
    }).then(function(response){
      $scope.enqdatas = response.data
      $scope.len=$scope.enqdatas.length;
      console.log($scope.len,"data length");
      // $scope.enqdata = response.data.results
      $scope.count = response.data.count
    })
  }
  $scope.enqdata()

})
app.controller("ecommerce.main", function($scope, $state, $stateParams, $http, $rootScope ,$filter) {

  $scope.len=''
  $scope.enqdata = function(){
    $scope.len=''
    var method = 'GET'
    var url ='/enquiry/receptions/'

    $http({
      method:method,
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:url,
    }).then(function(response){
      $scope.enqdatas = response.data
      $scope.len=$scope.enqdatas.length;
      console.log($scope.len,"data length");
      // $scope.enqdata = response.data.results
      $scope.count = response.data.count
    })
  }
  $scope.enqdata()

  $scope.search = {
    product:''
  }

})
app.controller("ecommerce.receptions", function($scope, $state, $stateParams, $http, $rootScope, $filter) {



// $scope.editenq = function(pk){
//   alert('heeeeeee')
//   $state.go('editenq',{'editenq':pk})
// }

$scope.editenq = function(i){

    $state.go('editenq',{id:i})
}




  $scope.limit = 6
$scope.offset = 0
$scope.count = 0

$scope.form = {
  search:'',
}
  $scope.enqdata = function(){
    var method = 'GET'
    var url ='/enquiry/receptions/?limit=' + $scope.limit + '&offset=' + $scope.offset
    if ($scope.form.search.length > 0){
      console.log($scope.form.search,"name datasssss");
      method = 'GET'
      url = url+'&search='+ $scope.form.search
    }
    $http({
      method:method,
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:url,
    }).then(function(response){
      $scope.enqdatas = response.data.results
      // $scope.enqdata = response.data.results
      $scope.count = response.data.count
    })
  }
  $scope.enqdata()

  $scope.prev = function(){
    if ($scope.offset > 0) {
      $scope.offset -= $scope.limit

      $scope.enqdata()
    }
  }
  $scope.next = function(){
    if ($scope.offset < $scope.count) {
      $scope.offset += $scope.limit
      console.log("paginationafdsafsd");
      $scope.enqdata()
    }
  }

  //deleting enquiry data
  $scope.deleteenq = function(i) {

     var isConfirmed = confirm("Are you sure to delete this record ?");
        if(isConfirmed){
          $http({
          method: 'DELETE',
          url: '/enquiry/receptions/' + i + "/",
        }).then(function(response) {
          // $scope.ware = response.data
          $scope.enqdata()
          // Flash.create("danger", "warehouse deleted")
          // $scope.warehouse();
        });
        }else{
        return false;
      }
    }




})
app.controller("ecommerce.addenq", function($scope, $state, $stateParams, $http, $rootScope, $state,$filter) {
  $scope.back = function(){
      $state.go('receptions')
  }
  // $scope.getClassDetails = function(){
  //   $http.get('/enquiry/addclass')
  //   .then(function(response){
  //     $scope.classData=response.data
  //   })
  // }
  // $scope.getClassDetails()
$scope.getClassDetails = function(){
  $http.get('/enquiry/addclass')
  .then(function(response){
    $scope.classData=response.data
    if ($scope.form.addclass!=undefined&&$scope.form.addclass!=null) {
      for (var i = 0; i < $scope.classData.length; i++) {
        if ($scope.classData[i].pk == $scope.form.addclass.pk) {
          $scope.form.addclass = $scope.classData[i]
        }
      }
    }
    console.log($scope.classData,'classsss datatatata');
  })
}



$scope.form={
      name:'',
      created:'',
      // admissionClass:'',
      father_name:'',
      f_occupation:'',
      f_qualification:'',
      f_mobile:'',
      mother_name:'',
      addclass:'',

      gender:'',
      dob:'',


      l_address:'',

      // testDate:'',
      // testTime:'',
      // studentImage:EmptyFile,

      }
      console.log($state,"hellooooooooooo");

      if($state.is('editenq')){


          var method = 'GET'
          var url ='/enquiry/receptions/'+$stateParams.id+'/'

          $http({
            method:method,
            // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
            url:url,
          }).then(function(response){
          $scope.form=response.data
          $scope.getClassDetails()

          })
        }
        else{
          $scope.getClassDetails()

        }




      // alert('sssss')
      $scope.msg = ''
      // $scope.errmsg = ''
      $scope.save = function() {
        console.log("save is working");
          // $scope.msg = ''
          // $scope.errmsg = ''
          var fd = new FormData()


          if ($scope.form.created == '') {
              // $scope.errmsg = 'Please fill the date form'
              return
            } else if (typeof $scope.form.created == 'object') {

              $scope.form.created = $scope.form.created.toJSON().split('T')[0]
            }






        if ($scope.form.dob == '') {
            // $scope.errmsg = 'Please fill the date form'
            return
          } else if (typeof $scope.form.dob == 'object') {

            $scope.form.dob = $scope.form.dob.toJSON().split('T')[0]
          }



          fd.append('name', $scope.form.name);
          // fd.append('admissionClass', $scope.form.admissionClass.pk);
          fd.append('father_name', $scope.form.father_name);
          fd.append('f_occupation', $scope.form.f_occupation);
          fd.append('f_qualification', $scope.form.f_qualification);
          fd.append('f_mobile', $scope.form.f_mobile);
          fd.append('mother_name', $scope.form.mother_name);
          fd.append('addclass', $scope.form.addclass.pk);

          fd.append('gender', $scope.form.gender);
          fd.append('dob', $scope.form.dob);
          fd.append('created', $scope.form.created);


          fd.append('l_address', $scope.form.l_address);


          // fd.append('studentAadhar', $scope.form.studentAadhar);
          // fd.append('studentDOBCer', $scope.form.studentDOBCer);
          // fd.append('studentTC', $scope.form.studentTC);
          //





        var method = 'POST'
        var url = '/enquiry/receptions/'
        if ($scope.form.pk){
          method = 'PATCH';
          url = url+$scope.form.pk + '/';
        }
        $scope.display=true;
        $http({
          method: method,
          url: url,
          data: fd,
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        }).
        then(function(response) {
          // Flash.create('success', 'Enquiry created successfully!')
          // $scope.msg = 'Saved'
          // $scope.errmsg = 'Unable to save date please Try Again!'
          $state.go('receptions')
      })
      }
})

app.controller("ecommerce.student", function($scope, $state, $stateParams, $http, $rootScope) {


    $scope.getClassDetails = function(){
      $http.get('/enquiry/addclass')
      .then(function(response){
        $scope.classData=response.data
      })
    }
    $scope.getClassDetails()

    $scope.getSectionDetails = function(){
      $http.get('/enquiry/addsection')
      .then(function(response){
        $scope.sectionData=response.data
      })
    }
    $scope.getSectionDetails()


  $scope.viewAdm = function(){

      // $rootScope.addTocart()
      $state.go('student')
  }
  $scope.addAdm = function(){

      // $rootScope.addTocart()
      $state.go('addAdmissionForm')
  }
  $scope.personal = function(){

      // $rootScope.addTocart()
      $state.go('addAdmissionForm')
  }


  $scope.limit = 6
$scope.offset = 0
$scope.count = 0

$scope.form = {
  search:'',
}
  $scope.admdata = function(){
    console.log("heloooooo nishantttttttt");
    var method = 'GET'
    var url ='/enquiry/admission/?limit=' + $scope.limit + '&offset=' + $scope.offset
    if ($scope.form.search.length > 0){
      console.log($scope.form.search,"name data");
      method = 'GET'
      url = url+'&search='+ $scope.form.search

    }
    $http({
      method:method,
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:url,
    }).then(function(response){
      $scope.admdatas = response.data.results
      // $scope.enqdata = response.data.results
      $scope.count = response.data.count
    })
  }
  $scope.admdata()

  $scope.prev = function(){
    if ($scope.offset > 0) {
      $scope.offset -= $scope.limit

      $scope.admdata()
    }
  }
  $scope.next = function(){
    if ($scope.offset < $scope.count) {
      $scope.offset += $scope.limit
      console.log("paginationafdsafsd");
      $scope.admdata()
    }
  }

  //deleting Admision data
  $scope.deleteadm = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/admission/" + i + "/",
       }).then(
         function(response) {
           // Flash.create("success", "success");
           $scope.admdata()

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
     console.log("sfsdfhhhhhhhhhhhhhhhh")



})

app.controller("ecommerce.addAdmission", function($scope, $state, $stateParams, $http, $rootScope ) {
  $scope.back = function(){
      $state.go('student')
  }
  console.log("hellloooo this is nishatn");
  $scope.getClassDetails = function(){
    $http.get('/enquiry/addclass')
    .then(function(response){
      $scope.classData=response.data
      console.log($scope.classData,'classsss datatatata');
    })
  }
  $scope.getHostelFeeDetails = function(){
    $http.get('/enquiry/addhostel')
    .then(function(response){
      $scope.hostelfeeData=response.data
      console.log($scope.hostelfeeData,'classsss datatatata');
    })
  }
  $scope.getClassDetails()

  $scope.getSectionDetails = function(){
    $http.get('/enquiry/addsection')
    .then(function(response){
      $scope.sectionData=response.data
      // console.log($scope.classData,'classsss datatatata');
    })
  }
  $scope.getSectionDetails()


    $scope.getBusRootDetails = function(){
      $http.get('/enquiry/root')
      .then(function(response){
        $scope.busRootData=response.data
        // console.log($scope.classData,'classsss datatatata');
      })
    }
    $scope.getBusRootDetails()
    $scope.getstdTypeDetails = function(){
      $http.get('/enquiry/extraFee')
      .then(function(response){
        $scope.stdTypeData=response.data
        console.log($scope.classData,'stdTypeData datatatata');
      })
    }
    $scope.getstdTypeDetails()

    $scope.getsectionDetails = function(){
      $http.get('/enquiry/addsection')
      .then(function(response){
        $scope.sectionData=response.data
        console.log($scope.classData,'stdTypeData datatatata');
      })
    }
    $scope.getsectionDetails()

    $scope.gethostalDetails = function(){
      $http.get('/enquiry/addHostel')
      .then(function(response){
        $scope.hostelData=response.data
      })
    }
    $scope.gethostalDetails()
    // var emptyFile = new File([""], "");
      // $scope.me = $users.get("mySelf");
      // $scope.data = input;
  // emptyFile = new File([""], "");
              // $scope.settings = settings;
  //             // $scope.settings.studentImage = emptyFile;
  $scope.form={
        name:'',
        // root_name:'',
        // created:'',
        admissionClass:'',
        father_name:'',
        f_occupation:'',
        f_qualification:'',
        f_mobile:'',
        mother_name:'',
        addclass:'',
        addsection:'',
        busRoot:'',
        addhostel:'',



        gender:'',
        // dob:'',


        l_address:'',

        admDate:'',
        admNo:'',
        admClass:'',
        section:'',
        rollNo:'',
        email:'',
        // stdType:'',
        // hostelTyoe:'',
        cast:'',
        religion:'',
        p_address:'',
        m_occupation:'',
        m_qualification:'',
        alternateNo:'',
        studentImage:emptyFile,
        // studentAadhar:'',
        // studentDOB:'',
        // CerstudentTC:'',

        }

        $scope.saveAdm = function() {

            var fd = new FormData()






          if ($scope.form.admDate == '') {
              // Flash.create('warning', 'Please Add Closing Date')
              return
            } else if (typeof $scope.form.admDate == 'object') {

              $scope.form.admDate = $scope.form.admDate.toJSON().split('T')[0]
            }

          // if (typeof $scope.form.studentImage != 'string' && $scope.form.studentImage != emptyFile && $scope.form.studentImage != null) {
          //     // fd.append('studentImage', $scope.form.studentImage)
          //     console.log("hellooo nishant");
          //   }

            fd.append('name', $scope.form.name);
            fd.append('admissionClass', $scope.form.admissionClass);
            fd.append('father_name', $scope.form.father_name);
            fd.append('f_occupation', $scope.form.f_occupation);
            fd.append('f_qualification', $scope.form.f_qualification);
            fd.append('f_mobile', $scope.form.f_mobile);
            fd.append('mother_name', $scope.form.mother_name);

            fd.append('gender', $scope.form.gender);
            fd.append('created', $scope.form.created);

            fd.append('l_address', $scope.form.l_address);

            fd.append('admDate', $scope.form.admDate);
            fd.append('admNo', $scope.form.admNo);
            fd.append('addclass', $scope.form.addclass.pk);
            fd.append('addsection', $scope.form.addsection.pk);
            fd.append('busRoot', $scope.form.busRoot.pk);
            fd.append('addhostel', $scope.form.addhostel.pk);
            console.log($scope.form.addhostel.pk,"helooooooooo pk");



            fd.append('section', $scope.form.section);
            fd.append('rollNo', $scope.form.rollNo);


            fd.append('email', $scope.form.email);
            // fd.append('busRoot', $scope.form.busRoot);

            // fd.append('stdType', $scope.form.stdType);
            // fd.append('hostel', $scope.form.hostel);
            // fd.append('hostelTyoe', $scope.form.hostelTyoe);
            fd.append('cast', $scope.form.cast);
            fd.append('religion', $scope.form.religion);
            fd.append('p_address', $scope.form.p_address);
            fd.append('m_occupation', $scope.form.m_occupation);
            fd.append('m_qualification', $scope.form.m_qualification);
            fd.append('alternateNo', $scope.form.alternateNo);
            fd.append('studentImage', $scope.form.studentImage);
            // fd.append('studentAadhar', $scope.form.studentAadhar);
            // fd.append('studentDOBCer', $scope.form.studentDOBCer);
            // fd.append('studentTC', $scope.form.studentTC);




            console.log(fd,"ddddddddddddddddddddddddddd");

          var method = 'POST'
          var url = '/enquiry/admission/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('student')
        })
        }


})


app.controller("ecommerce.setting", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.form={
        password:'',
      }

      $scope.mainSetting = function() {
        $scope.a=$scope.form.password
        console.log($scope.a,"valueeeee");
        if($scope.a=='123456'){
         $state.go('mainSetting')
       }
       else {

           alert("Error. invalid password");

       }

      }

})
app.controller("ecommerce.mainSetting", function($scope, $state, $stateParams, $http, $rootScope) {


})
app.controller("ecommerce.class", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('mainSetting')
  }
  $scope.limit = 2
  $scope.offset = 0
  $scope.count = 0

  $scope.form = {
  search:'',
  }
  console.log("aaaaaaaaaaaaaaaaaaaaa")
  $scope.clsdata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/addclass/'
    }).then(function(response){
      $scope.clsdata = response.data
      // $scope.enqdata = response.data.results

      console.log(response.data,"sdfsdfsdfsdfffffffffff");
      $scope.count = response.data.count
    })
  }
  $scope.clsdata()

  $scope.prev = function(){
    if ($scope.offset > 0) {
      $scope.offset -= $scope.limit
      $scope.clsdata()
    }
  }
  $scope.next = function(){
    if ($scope.offset < $scope.count) {
      $scope.offset += $scope.limit
      $scope.clsdata()
    }
  }

  //deleting enquiry data
  $scope.deletecls = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/addclass/" + i + "/",
       }).then(
         function(response) {
           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
     console.log("sfsdfhhhhhhhhhhhhhhhh")
     $scope.clsdata()

})
app.controller("ecommerce.addClass", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('class')
  }
  $scope.form={

        c_name:'',
        c_fee:'',
        f_inst:'',
        subject1:'',
        subject2:'',
        subject5:'',
        subject3:'',
        subject4:'',
        subject6:'',
        subject7:'',
        subject8:'',

        }
        $scope.saveClass = function() {

            var fd = new FormData()

            fd.append('c_name', $scope.form.c_name);
            fd.append('c_fee', $scope.form.c_fee);
            fd.append('f_inst', $scope.form.f_inst);
            fd.append('subject1', $scope.form.subject1);
            fd.append('subject2', $scope.form.subject2);

            fd.append('subject3', $scope.form.subject3);
            fd.append('subject4', $scope.form.subject4);
            fd.append('subject5', $scope.form.subject5);
            fd.append('subject6', $scope.form.subject6);
            fd.append('subject7', $scope.form.subject7);
            fd.append('subject8', $scope.form.subject8);


          var method = 'POST'
          var url = '/enquiry/addclass/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('class')
        })
        }


})

app.controller("ecommerce.section", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('mainSetting')
  }
    $scope.limit = 2
    $scope.offset = 0
    $scope.count = 0

    $scope.form = {
    search:'',
    }
    console.log("aaaaaaaaaaaaaaaaaaaaa")
    $scope.sectiondata = function(){
      $http({
        method:'GET',
        // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
        url:'/enquiry/addsection/'
      }).then(function(response){
        $scope.sectiondata = response.data
        // $scope.enqdata = response.data.results

        console.log(response.data,"sdfsdfsdfsdfffffffffff");
        $scope.count = response.data.count
      })
    }
    $scope.sectiondata()

    $scope.prev = function(){
      if ($scope.offset > 0) {
        $scope.offset -= $scope.limit
        $scope.sectiondata()
      }
    }
    $scope.next = function(){
      if ($scope.offset < $scope.count) {
        $scope.offset += $scope.limit
        $scope.sectiondata()
      }
    }

    //deleting enquiry data
    $scope.deletesection = function(i) {
         $http({
           method: "DELETE",
           url: "/enquiry/addsection/" + i + "/",
         }).then(
           function(response) {
             // Flash.create("success", "success");

           },

           function errorCallback(response) {
             alert("Error. while deleting user Try Again!");
           });
       }
       console.log("sfsdfhhhhhhhhhhhhhhhh")
       $scope.sectiondata()


})
app.controller("ecommerce.addSection", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('section')
  }
  $scope.form={

        section:'',

        }
        $scope.saveSection = function() {

            var fd = new FormData()

            fd.append('section', $scope.form.section);



          var method = 'POST'
          var url = '/enquiry/addsection/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('section')
        })
        }


})
app.controller("ecommerce.busRoot", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('mainSetting')
  }
      $scope.limit = 2
      $scope.offset = 0
      $scope.count = 0

      $scope.form = {
      search:'',
      }
      console.log("aaaaaaaaaaaaaaaaaaaaa")
      $scope.rootdata = function(){
        $http({
          method:'GET',
          // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
          url:'/enquiry/root/'
        }).then(function(response){
          $scope.rootdata = response.data
          // $scope.enqdata = response.data.results

          console.log(response.data,"sdfsdfsdfsdfffffffffff");
          $scope.count = response.data.count
        })
      }
      $scope.rootdata()

      $scope.prev = function(){
        if ($scope.offset > 0) {
          $scope.offset -= $scope.limit
          $scope.rootdata()
        }
      }
      $scope.next = function(){
        if ($scope.offset < $scope.count) {
          $scope.offset += $scope.limit
          $scope.rootdata()
        }
      }

      //deleting enquiry data
      $scope.deleteroot = function(i) {
           $http({
             method: "DELETE",
             url: "/enquiry/root/" + i + "/",
           }).then(
             function(response) {
               // Flash.create("success", "success");

             },

             function errorCallback(response) {
               alert("Error. while deleting user Try Again!");
             });
         }
         console.log("sfsdfhhhhhhhhhhhhhhhh")
         $scope.rootdata()



})
app.controller("ecommerce.addBusRoot", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('busRoot')
  }
  $scope.form={

        bus_name:'',
        root_name:'',
        root_fee:'',
        root_inst:'',


        }
        $scope.saveRoot = function() {

            var fd = new FormData()

            fd.append('bus_name', $scope.form.bus_name);
            fd.append('root_name', $scope.form.root_name);

            fd.append('root_fee', $scope.form.root_fee);

            fd.append('root_inst', $scope.form.root_inst);




          var method = 'POST'
          var url = '/enquiry/root/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('busRoot')
        })
        }

})

app.controller("ecommerce.extraFee", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('mainSetting')
  }
  $scope.limit = 2
  $scope.offset = 0
  $scope.count = 0

  $scope.form = {
  search:'',
  }
  console.log("aaaaaaaaaaaaaaaaaaaaa")
  $scope.extraFeedata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/extraFee/'
    }).then(function(response){
      $scope.extraFeedata = response.data
      // $scope.enqdata = response.data.results

      console.log(response.data,"sdfsdfsdfsdfffffffffff");
      $scope.count = response.data.count
    })
  }
  $scope.extraFeedata()

  $scope.prev = function(){
    if ($scope.offset > 0) {
      $scope.offset -= $scope.limit
      $scope.extraFeedata()
    }
  }
  $scope.next = function(){
    if ($scope.offset < $scope.count) {
      $scope.offset += $scope.limit
      $scope.extraFeedata()
    }
  }

  //deleting enquiry data
  $scope.deleteExtraFee = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/extraFee/" + i + "/",
       }).then(
         function(response) {
           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
     console.log("sfsdfhhhhhhhhhhhhhhhh")
     $scope.extraFeedata()


})


app.controller("ecommerce.addExtraFee", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('extraFee')
  }
  $scope.getClassDetails = function(){
    $http.get('/enquiry/addclass')
    .then(function(response){
      $scope.classData=response.data
      console.log($scope.classData,'classsss datatatata');
    })
  }
  $scope.getClassDetails()
  $scope.form={
        fee_name:'',

        extra_fee:'',
        stdType:'',
        addclass:'',
        month:'',


        }
        console.log($scope.form,"d;sflksdlfsdkflsd;lfs;lf;lslllllllllllllllllllllllll");
        $scope.saveExtraFee = function() {

            var fd = new FormData()

            fd.append('fee_name', $scope.form.fee_name);
            fd.append('extra_fee', $scope.form.extra_fee);
            fd.append('stdType', $scope.form.stdType);
            fd.append('addclass', $scope.form.addclass.pk);
            fd.append('month', $scope.form.month);





          var method = 'POST'
          var url = '/enquiry/extraFee/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Enquiry created successfully!')
            $state.go('extraFee')
        })
        }
})
app.controller("ecommerce.payFee", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.viewAdm = function(){

      // $rootScope.addTocart()
      $state.go('student')
  }
  $scope.addAdm = function(){

      // $rootScope.addTocart()
      $state.go('addAdmissionForm')
  }
  $scope.personal = function(){

      // $rootScope.addTocart()
      $state.go('addAdmissionForm')
  }
  $scope.payFee = function(){

      // $rootScope.addTocart()
      $state.go('payFee')
  }
  $scope.addPayFee = function(i){

      // $rootScope.addTocart()
      $state.go('addPayFee',{id:i})
      // $rootScope.ids=i
      // console.log($scope.ids,"idddd");
  }



  $scope.admdata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/admission/'
    }).then(function(response){
      $scope.admdata = response.data
      // $scope.enqdata = response.data.results

      console.log(response.data,"sdfsdfsdfsdfffffffffff");
      $scope.count = response.data.count
    })
  }
  $scope.admdata()




})
app.controller("ecommerce.addPayFee", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.myFunction = function(){
  // function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox == true){
      // text.style.display = "none";
      text.style.display = "block";
    } else {
      text.style.display = "none";
       // text.style.display = "block";
    }
  }


  $scope.myFunction1 = function(){
  // function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text1");
    if (checkBox == true){
      // text.style.display = "none";
      text.style.display = "block";
    } else {
      text.style.display = "none";
       // text.style.display = "block";
    }
  }

  $scope.addPayFee = function(){
    $scope.Pk = $stateParams.id,
    // console.log($rootScope.ids,"iddddnnnnnn");
    $http({
      method:'GET',

      url:'/enquiry/admission/'+$scope.Pk +"/",

    }).then(function(response){
      $scope.admdata = response.data
      // $scope.enqdata = response.data.results

      console.log(response.data,"nishant");
      $scope.count = response.data.count
    })


  }
  $scope.addPayFee()


    $scope.clsfeedis = function(){
      $scope.Pk = $stateParams.id,
      // console.log($rootScope.ids,"iddddnnnnnn");
      $http({
        method:'GET',

        url:'/enquiry/classFeeDiscount/?addadmission='+$scope.Pk +"/",

      }).then(function(response){
        $scope.clsfeediss = response.data
        // $scope.enqdata = response.data.results

        console.log($scope.clsfeediss,"nishantadadadad");
        $scope.count = response.data.count
      })


    }
    $scope.clsfeedis()


    $scope.busfeedis = function(){
      $scope.Pk = $stateParams.id,
      // console.log($rootScope.ids,"iddddnnnnnn");
      $http({
        method:'GET',

        url:'/enquiry/busFeeDiscount/?addadmission='+$scope.Pk +"/",

      }).then(function(response){
        $scope.busfeediss = response.data
        // $scope.enqdata = response.data.results

        console.log(response.data,"nishantadadadad12121");
        $scope.count = response.data.count
      })


    }
    $scope.busfeedis()


})
app.controller("ecommerce.addHostel", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('mainSetting')
  }

  $scope.hosteldata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/addHostel/'
    }).then(function(response){
      $scope.hosteldata = response.data
      // $scope.enqdata = response.data.results

      console.log(response.data,"sdfsdfsdfsdfffffffffff");
      $scope.count = response.data.count
    })
  }
  $scope.hosteldata()

  $scope.deleteHostel = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/addHostel/" + i + "/",
       }).then(
         function(response) {
           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
     console.log("sfsdfhhhhhhhhhhhhhhhh")
     $scope.hosteldata()
})
app.controller("ecommerce.addNewHostel", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('addHostel')
  }
  $scope.form={
        h_name:'',

        h_fee:'',
        h_inst:'',
        h_instruction:'',



        }
        $scope.saveHostel = function() {

            var fd = new FormData()

            fd.append('h_name', $scope.form.h_name);
            fd.append('h_fee', $scope.form.h_fee);
            fd.append('h_inst', $scope.form.h_inst);
            fd.append('h_instruction', $scope.form.h_instruction);





          var method = 'POST'
          var url = '/enquiry/addHostel/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Enquiry created successfully!')
            $state.go('addHostel')
        })
        }
})
app.controller("ecommerce.income", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('ecommerce')
  }



    $scope.incomedata = function(){
      $http({
        method:'GET',
        // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
        url:'/enquiry/income/'
      }).then(function(response){
        $scope.incomeData = response.data
        // $scope.enqdata = response.data.results

        $scope.count = response.data.count
      })
    }
    $scope.incomedata()

    $scope.deleteIncome = function(i) {
         $http({
           method: "DELETE",
           url: "/enquiry/income/" + i + "/",
         }).then(
           function(response) {
             $scope.incomedata()

             // Flash.create("success", "success");

           },

           function errorCallback(response) {
             alert("Error. while deleting user Try Again!");
           });
       }
})
app.controller("ecommerce.AddIncome", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('income')
  }

  $scope.getincomeMode = function(){
    $http.get('/enquiry/incomeMode')
    .then(function(response){
      $scope.incomeModeData=response.data
    })
  }
  $scope.getincomeMode()

  $scope.form={

        income_details:'',
        amount:'',
        date:'',
        income_type:'',
        incomemode:'',
        }

        $scope.saveincome = function() {

            var fd = new FormData()
            if ($scope.form.date == '') {
                // Flash.create('warning', 'Please Add Closing Date')
                return
              } else if (typeof $scope.form.date == 'object') {

                $scope.form.date = $scope.form.date.toJSON().split('T')[0]
              }



            fd.append('income_details', $scope.form.income_details);
            fd.append('incomemode', $scope.form.incomemode.pk);
            console.log($scope.form.incomemode.pk,"form datatatatatat");
            fd.append('amount', $scope.form.amount);
            fd.append('date', $scope.form.date);
            fd.append('income_type', $scope.form.income_type);




          var method = 'POST'
          var url = '/enquiry/income/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('income')
        })
        }
})
app.controller("ecommerce.expense", function($scope, $state, $stateParams, $http, $rootScope) {

  $scope.back = function(){
      $state.go('ecommerce')
  }



  $scope.expensedata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/expense/'
    }).then(function(response){
      $scope.expensedatas = response.data
      // $scope.enqdata = response.data.results

      $scope.count = response.data.count
    })
  }
  $scope.expensedata()

  $scope.deleteExpense = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/expense/" + i + "/",
       }).then(
         function(response) {
           $scope.expensedata()

           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
})
app.controller("ecommerce.addExpense", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('expense')
  }


    $scope.getExpenseMode = function(){
      $http.get('/enquiry/expenseMode')
      .then(function(response){
        $scope.expenseModeData=response.data
        console.log(response.data,"expense mode datatatata");
      })
    }
    $scope.getExpenseMode()
  $scope.form={

        expense_details:'',
        amount:'',
        date:'',
        expense_type:'',
        expenseMode:'',
        }
        $scope.saveExpense = function() {

            var fd = new FormData()
            if ($scope.form.date == '') {
                // Flash.create('warning', 'Please Add Closing Date')
                return
              } else if (typeof $scope.form.date == 'object') {

                $scope.form.date = $scope.form.date.toJSON().split('T')[0]
              }


            fd.append('expense_details', $scope.form.expense_details);
            fd.append('amount', $scope.form.amount);
            fd.append('date', $scope.form.date);
            fd.append('expenseMode', $scope.form.expenseMode.pk);

            fd.append('expense_type', $scope.form.expense_type);


          var method = 'POST'
          var url = '/enquiry/expense/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('expense')
        })
        }
})
app.controller("ecommerce.mode", function($scope, $state, $stateParams, $http, $rootScope) {





  $scope.limit = 6
$scope.offset = 0
$scope.count = 0

// $scope.form = {
//   search:'',
// }
  $scope.expenseMode = function(){

    var method = 'GET'
    var url ='/enquiry/expenseMode/?limit=' + $scope.limit + '&offset=' + $scope.offset
    // if ($scope.form.search.length > 0){
    //   console.log($scope.form.search,"name datasssss");
    //   method = 'GET'
    //   url = url+'&search='+ $scope.form.search
    // }
    $http({
      method:method,
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:url,
    }).then(function(response){
      $scope.expenseModeData = response.data.results
      console.log("expense mode data");
      // $scope.enqdata = response.data.results
      $scope.count = response.data.count
    })
  }
  $scope.expenseMode()

  $scope.prev1 = function(){
    if ($scope.offset > 0) {
      $scope.offset -= $scope.limit

      $scope.expenseMode()
    }
  }
  $scope.next1 = function(){
    if ($scope.offset < $scope.count) {
      $scope.offset += $scope.limit
      console.log("paginationafdsafsd");
      $scope.expenseMode()
    }
  }

  $scope.deleteExpenseMode = function(i) {

     var isConfirmed = confirm("Are you sure to delete this record ?");
        if(isConfirmed){
          $http({
          method: 'DELETE',
          url: '/enquiry/expenseMode/' + i + "/",
        }).then(function(response) {
          // $scope.ware = response.data
          console.log("successfully data expense");

          $scope.expenseMode()
          // Flash.create("danger", "warehouse deleted")
          // $scope.warehouse();
        });
        }else{
        return false;
      }
    }



    $scope.form = {
      search1:'',
    }
      $scope.incomeMode = function(){
        var method = 'GET'
        var url ='/enquiry/incomeMode/?limit=' + $scope.limit + '&offset=' + $scope.offset
        if ($scope.form.search1.length > 0){
          method = 'GET'
          url = url+'&search='+ $scope.form.search1
        }
        $http({
          method:method,
          // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
          url:url,
        }).then(function(response){
          $scope.incomeModeData = response.data.results
          console.log("income mode data");

          // $scope.enqdata = response.data.results
          $scope.count = response.data.count
        })
      }
      $scope.incomeMode()

      $scope.prev = function(){
        if ($scope.offset > 0) {
          $scope.offset -= $scope.limit

          $scope.incomeMode()
        }
      }
      $scope.next = function(){
        if ($scope.offset < $scope.count) {
          $scope.offset += $scope.limit
          console.log("paginationafdsafsd");
          $scope.incomeMode()
        }
      }

      $scope.deleteIncomeMode = function(i) {

         var isConfirmed = confirm("Are you sure to delete this record ?");
            if(isConfirmed){
              $http({
              method: 'DELETE',
              url: '/enquiry/incomeMode/' + i + "/",
            }).then(function(response) {
              console.log("successfully data income");

              // $scope.ware = response.data
              $scope.incomeMode()
              // Flash.create("danger", "warehouse deleted")
              // $scope.warehouse();
            });
            }else{
            return false;
          }
        }
})
app.controller("ecommerce.AddExpenseMode", function($scope, $state, $stateParams, $http, $rootScope) {

  $scope.back = function(){
      $state.go('mode')
  }
  $scope.form={

        mode_name:'',

        }
        $scope.saveExpenseMode = function() {

            var fd = new FormData()




            fd.append('mode_name', $scope.form.mode_name);


          var method = 'POST'
          var url = '/enquiry/expenseMode/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('mode')
        })
        }
})
app.controller("ecommerce.AddIncomeMode", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('mode')
  }
  $scope.form={

        mode_name:'',

        }
        $scope.saveIncomeMode = function() {

            var fd = new FormData()




            fd.append('mode_name', $scope.form.mode_name);


          var method = 'POST'
          var url = '/enquiry/incomeMode/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('mode')
        })
        }
})
app.controller("ecommerce.bank", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('ecommerce')
  }



  $scope.bankdata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/addbank/'
    }).then(function(response){
      $scope.bankdatas = response.data
      // $scope.enqdata = response.data.results

      $scope.count = response.data.count
    })
  }
  $scope.bankdata()

  $scope.deletebank = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/addbank/" + i + "/",
       }).then(
         function(response) {
           $scope.bankdata()

           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
})
app.controller("ecommerce.addbank", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('bank')
  }
  $scope.form={
        bank_name:'',

        acc_no:'',
        ifsc:'',
        address:'',



        }
        $scope.savebank = function() {

            var fd = new FormData()

            fd.append('bank_name', $scope.form.bank_name);
            fd.append('acc_no', $scope.form.acc_no);
            fd.append('ifsc', $scope.form.ifsc);
            fd.append('address', $scope.form.address);





          var method = 'POST'
          var url = '/enquiry/addbank/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            console.log("abcd");
            // Flash.create('success', 'Enquiry created successfully!')
            $state.go('bank')
        })
        }
})
app.controller("ecommerce.bankdepo", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('ecommerce')
  }



  $scope.depodata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/bankdepo/'
    }).then(function(response){
      $scope.depodatas = response.data
      // $scope.enqdata = response.data.results

      $scope.count = response.data.count
    })
  }
  $scope.depodata()

  $scope.deletedepo = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/bankdepo/" + i + "/",
       }).then(
         function(response) {
           $scope.depodata()

           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
})
app.controller("ecommerce.adddepo", function($scope, $state, $stateParams, $http, $rootScope) {

  $scope.back = function(){
      $state.go('bankdepo')
  }
  $scope.getBank = function(){
    $http.get('/enquiry/addbank')
    .then(function(response){
      $scope.BankData=response.data
    })
  }
  $scope.getBank()
  $scope.form={
        // bank_name:'',
        depo_name:'',
        depo_details:'',
        amount:'',
        date:'',
        income_type:'',
        addbank:'',



        }
        $scope.savedepo = function() {

            var fd = new FormData()
            if ($scope.form.date == '') {
                // Flash.create('warning', 'Please Add Closing Date')
                return
              } else if (typeof $scope.form.date == 'object') {

                $scope.form.date = $scope.form.date.toJSON().split('T')[0]
              }

            fd.append('depo_name', $scope.form.depo_name);
            fd.append('depo_details', $scope.form.depo_details);
            fd.append('amount', $scope.form.amount);
            fd.append('date', $scope.form.date);
            console.log($scope.form.date,"empty date");

            fd.append('income_type', $scope.form.income_type);
            fd.append('addbank', $scope.form.addbank.pk);







          var method = 'POST'
          var url = '/enquiry/bankdepo/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // console.log("abcd");
            // Flash.create('success', 'Enquiry created successfully!')
            $state.go('bankdepo')
        })
        }
})
app.controller("ecommerce.bankwith", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('ecommerce')
  }



  $scope.withdata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/bankwith/'
    }).then(function(response){
      $scope.withdatas = response.data
      // $scope.enqdata = response.data.results

      $scope.count = response.data.count
    })
  }
  $scope.withdata()

  $scope.deletewith = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/bankwith/" + i + "/",
       }).then(
         function(response) {
           $scope.withdata()

           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
})
app.controller("ecommerce.addwith", function($scope, $state, $stateParams, $http, $rootScope) {

  $scope.back = function(){
      $state.go('bankwith')
  }
  $scope.getBank = function(){
    $http.get('/enquiry/addbank')
    .then(function(response){
      $scope.BankData=response.data
    })
  }
  $scope.getBank()
  $scope.form={
        // bank_name:'',
        depo_name:'',
        depo_details:'',
        amount:'',
        date:'',
        income_type:'',
        addbank:'',



        }
        $scope.savewith = function() {

            var fd = new FormData()
            if ($scope.form.date == '') {
                // Flash.create('warning', 'Please Add Closing Date')
                return
              } else if (typeof $scope.form.date == 'object') {

                $scope.form.date = $scope.form.date.toJSON().split('T')[0]
              }

            fd.append('depo_name', $scope.form.depo_name);
            fd.append('depo_details', $scope.form.depo_details);
            fd.append('amount', $scope.form.amount);
            fd.append('date', $scope.form.date);
            fd.append('income_type', $scope.form.income_type);
            fd.append('addbank', $scope.form.addbank.pk);







          var method = 'POST'
          var url = '/enquiry/bankwith/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // console.log("abcd");
            // Flash.create('success', 'Enquiry created successfully!')
            $state.go('bankwith')
        })
        }
})
app.controller("ecommerce.department", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('ecommerce')
  }



  $scope.departmentdata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/adddepartment/'
    }).then(function(response){
      $scope.departmentdatas = response.data
      // $scope.enqdata = response.data.results

      $scope.count = response.data.count
    })
  }
  $scope.departmentdata()

  $scope.deletedepartment = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/adddepartment/" + i + "/",
       }).then(
         function(response) {
           $scope.departmentdata()

           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
})
app.controller("ecommerce.adddepartment", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('department')
  }
  $scope.form={

        department_name:'',

        }
        $scope.savedepartment = function() {

            var fd = new FormData()




            fd.append('department_name', $scope.form.department_name);


          var method = 'POST'
          var url = '/enquiry/adddepartment/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('department')
        })
        }
})
app.controller("ecommerce.staff", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('ecommerce')
  }



  $scope.staffdata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/addstaff/'
    }).then(function(response){
      $scope.staffdatas = response.data
      // $scope.enqdata = response.data.results

      $scope.count = response.data.count
    })
  }
  $scope.staffdata()

  $scope.deletestaff = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/addstaff/" + i + "/",
       }).then(
         function(response) {
           $scope.staffdata()

           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }

})
app.controller("ecommerce.addstaff", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('staff')
  }
  $scope.getBankDepartment = function(){
    $http.get('/enquiry/adddepartment')
    .then(function(response){
      $scope.departmentData=response.data
    })
  }
  $scope.getBankDepartment()

  $scope.form={
        // bank_name:'',
        department:'',
        name:'',
        dob:'',
        gender:'',



        }
        $scope.savestaff = function() {

            var fd = new FormData()
            if ($scope.form.dob == '') {
                // Flash.create('warning', 'Please Add Closing Date')
                return
              } else if (typeof $scope.form.dob == 'object') {

                $scope.form.dob = $scope.form.dob.toJSON().split('T')[0]
              }

            fd.append('department', $scope.form.department.pk);
            fd.append('name', $scope.form.name);
            fd.append('dob', $scope.form.dob);
            fd.append('gender', $scope.form.gender);







          var method = 'POST'
          var url = '/enquiry/addstaff/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // console.log("abcd");
            // Flash.create('success', 'Enquiry created successfully!')
            $state.go('staff')
        })
        }
})
app.controller("ecommerce.examterm", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('ecommerce')
  }



  $scope.examtermdata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/addexamterm/'
    }).then(function(response){
      $scope.examtermData = response.data
      // $scope.enqdata = response.data.results

      $scope.count = response.data.count
    })
  }
  $scope.examtermdata()

  $scope.deleteexamterm = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/addexamterm/" + i + "/",
       }).then(
         function(response) {
           $scope.examtermdata()

           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
})
app.controller("ecommerce.addexamterm", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('examterm')
  }
  $scope.form={

        term_name:'',

        }
        $scope.saveexamterm = function() {

            var fd = new FormData()




            fd.append('term_name', $scope.form.term_name);


          var method = 'POST'
          var url = '/enquiry/addexamterm/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('examterm')
        })
        }
})
app.controller("ecommerce.subject", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('ecommerce')
  }



  $scope.subjectdata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/addsubject/'
    }).then(function(response){
      $scope.subjectdatas = response.data
      // $scope.enqdata = response.data.results

      $scope.count = response.data.count
    })
  }
  $scope.subjectdata()

  $scope.deletesubject = function(i) {
       $http({
         method: "DELETE",
         url: "/enquiry/addsubject/" + i + "/",
       }).then(
         function(response) {
           $scope.subjectdata()

           // Flash.create("success", "success");

         },

         function errorCallback(response) {
           alert("Error. while deleting user Try Again!");
         });
     }
})
app.controller("ecommerce.addsubject", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('subject')
  }
  $scope.getClassDetails = function(){
    $http.get('/enquiry/addclass')
    .then(function(response){
      $scope.classData=response.data
    })
  }
  $scope.getClassDetails()
  //
  // $scope.getExamTerm = function(){
  //   $http.get('/enquiry/addexamterm')
  //   .then(function(response){
  //     $scope.ExamTermData=response.data
  //   })
  // }
  // $scope.getExamTerm()

  $scope.form={

        addclass:'',
        subject1:'',
        subject2:'',
        subject5:'',
        subject3:'',
        subject4:'',
        subject6:'',
        subject7:'',
        subject8:'',

        }
        $scope.savesubject = function() {

            var fd = new FormData()




            fd.append('addclass', $scope.form.addclass.pk);
            fd.append('subject1', $scope.form.subject1);
            fd.append('subject2', $scope.form.subject2);

            fd.append('subject3', $scope.form.subject3);
            fd.append('subject4', $scope.form.subject4);
            fd.append('subject5', $scope.form.subject5);
            fd.append('subject6', $scope.form.subject6);
            fd.append('subject7', $scope.form.subject7);
            fd.append('subject8', $scope.form.subject8);




          var method = 'POST'
          var url = '/enquiry/addsubject/'
          if ($scope.form.pk){
            method = 'PATCH';
            url = url+$scope.form.pk + '/';
          }
          $scope.display=true;
          $http({
            method: method,
            url: url,
            data: fd,
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).
          then(function(response) {
            // Flash.create('success', 'Admission data created successfully!')
            $state.go('subject')
        })
        }

})
app.controller("ecommerce.addexam", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.back = function(){
      $state.go('examterm')
  }
  $scope.getClassDetails = function(){
    $http.get('/enquiry/addclass')
    .then(function(response){
      $scope.classData=response.data
    })
  }
  $scope.getClassDetails()

  $scope.getExamTerm = function(){
    $http.get('/enquiry/addexamterm')
    .then(function(response){
      $scope.ExamTermData=response.data
    })
  }
  $scope.getExamTerm()

})
app.controller("ecommerce.cc", function($scope, $state, $stateParams, $http, $rootScope) {
  $scope.limit = 6
$scope.offset = 0
$scope.count = 0

$scope.form = {
  search:'',
}
  $scope.admdata = function(){
    console.log("heloooooo nishantttttttt");
    var method = 'GET'
    var url ='/enquiry/admission/?limit=' + $scope.limit + '&offset=' + $scope.offset
    if ($scope.form.search.length > 0){
      console.log($scope.form.search,"name data");
      method = 'GET'
      url = url+'&search='+ $scope.form.search

    }
    $http({
      method:method,
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:url,
    }).then(function(response){
      $scope.admdatas = response.data.results
      // $scope.enqdata = response.data.results
      $scope.count = response.data.count
    })
  }
  $scope.admdata()

  $scope.prev = function(){
    if ($scope.offset > 0) {
      $scope.offset -= $scope.limit

      $scope.admdata()
    }
  }
  $scope.next = function(){
    if ($scope.offset < $scope.count) {
      $scope.offset += $scope.limit
      console.log("paginationafdsafsd");
      $scope.admdata()
    }
  }


})
app.controller("ecommerce.discount", function($scope, $state, $stateParams, $http, $rootScope) {

    $scope.limit = 6
  $scope.offset = 0
  $scope.count = 0

  $scope.form = {
    search:'',
  }
  $scope.admdata = function(){
    $http({
      method:'GET',
      // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
      url:'/enquiry/admission/'
    }).then(function(response){
      $scope.admdata = response.data
      // $scope.enqdata = response.data.results

      console.log(response.data,"sdfsdfsdfsdfffffffffff");
      $scope.count = response.data.count
    })
  }
  $scope.admdata()

    $scope.prev = function(){
      if ($scope.offset > 0) {
        $scope.offset -= $scope.limit

        $scope.admdata()
      }
    }
    $scope.next = function(){
      if ($scope.offset < $scope.count) {
        $scope.offset += $scope.limit
        console.log("paginationafdsafsd");
        $scope.admdata()
      }
    }



})
app.controller("ecommerce.adddiscount", function($scope, $state, $stateParams, $http, $rootScope) {

$scope.adddiscount = function(){
  $scope.Pk = $stateParams.id,
  // console.log($rootScope.ids,"iddddnnnnnn");
  $http({
    method:'GET',

    url:'/enquiry/admission/'+$scope.Pk +"/",

  }).then(function(response){
    $scope.admdata = response.data
    // var classfee = $scope.admdata.addclass.c_fee
    // $scope.enqdata = response.data.results

    console.log(response.data,"nishant");
    $scope.count = response.data.count
  })
}
$scope.adddiscount()

$scope.form={

      // addclass:'',
      // addsection:'',
      addadmission:$scope.Pk,
      month:'',
      amount:'',
      t_amount:'',




    }

      $scope.savediscount = function() {
        var amt=$scope.form.amount
        $scope.newAmt=amt
        // var orignalfee=$scope.admdata.c_fee

        // console.log(orignalfee,"afdsooooofas");
          var fd = new FormData()


          // $scope.t_amt=$scope.admdata.addclass.c_fee - $scope.form.amount / $scope.admdata.addclass.f_inst

          fd.append('addadmission', $scope.form.addadmission);
          fd.append('month', $scope.form.month);
          console.log($scope.form.month,"month name");
          fd.append('amount', $scope.form.amount);
          fd.append('t_amount', $scope.admdata.addclass.c_fee  / $scope.admdata.addclass.f_inst - $scope.form.amount);

          // fd.append('subject3', $scope.form.subject3);
          // fd.append('subject4', $scope.form.subject4);




        var method = 'POST'
        var url = '/enquiry/classFeeDiscount/'
        if ($scope.form.pk){
          method = 'PATCH';
          url = url+$scope.form.pk + '/';
        }
        $scope.display=true;
        $http({
          method: method,
          url: url,
          data: fd,
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        }).
        then(function(response) {
          // Flash.create('success', 'Admission data created successfully!')
          $state.go('discount')
      })
      }

      $scope.getdiscount = function(){
        $http({
          method:'GET',
          // url:'/api/homepage/paymentAdviceCreate/?date='+$scope.form.fromDate.toJSON().split('T')[0]
          url:'/enquiry/classFeeDiscount/'
        }).then(function(response){
          $scope.clsDiscount = response.data
          // $scope.enqdata = response.data.results

          console.log(response.data,"sdfsdfsdfsdfffffffffff");
          $scope.count = response.data.count
        })
      }
      $scope.getdiscount()


      $scope.formData={

            // addclass:'',
            // addsection:'',
            addadmission:$scope.Pk,
            month:'',
            amount:'',
            t_amount:'',




          }

            $scope.savebusdiscount = function() {
              // var amt=$scope.form.amount
              // $scope.newAmt=amt
              // var orignalfee=$scope.admdata.c_fee

              // console.log(orignalfee,"afdsooooofas");
                var fd = new FormData()


                // $scope.t_amt=$scope.admdata.addclass.c_fee - $scope.form.amount / $scope.admdata.addclass.f_inst

                fd.append('addadmission', $scope.formData.addadmission);
                fd.append('month', $scope.formData.month);
                console.log($scope.formData.months,"month name");
                fd.append('amount', $scope.formData.amount);
                fd.append('t_amount', $scope.admdata.busRoot.root_fee  / $scope.admdata.busRoot.root_inst - $scope.formData.amount);

                // fd.append('subject3', $scope.form.subject3);
                // fd.append('subject4', $scope.form.subject4);




              var method = 'POST'
              var url = '/enquiry/busFeeDiscount/'
              if ($scope.formData.pk){
                method = 'PATCH';
                url = url+$scope.formData.pk + '/';
              }
              $scope.display=true;
              $http({
                method: method,
                url: url,
                data: fd,
                transformRequest: angular.identity,
                headers: {
                  'Content-Type': undefined
                }
              }).
              then(function(response) {
                // Flash.create('success', 'Admission data created successfully!')
                $state.go('discount')
            })
            }


                  $scope.formDatas={

                        // addclass:'',
                        // addsection:'',
                        addadmission:$scope.Pk,
                        month:'',
                        amount:'',
                        t_amount:'',




                      }

                        $scope.savehosteldiscount = function() {
                          // var amt=$scope.form.amount
                          // $scope.newAmt=amt
                          // var orignalfee=$scope.admdata.c_fee

                          // console.log(orignalfee,"afdsooooofas");
                            var fd = new FormData()


                            // $scope.t_amt=$scope.admdata.addclass.c_fee - $scope.form.amount / $scope.admdata.addclass.f_inst

                            fd.append('addadmission', $scope.formDatas.addadmission);
                            fd.append('month', $scope.formDatas.month);
                            console.log($scope.formDatas.months,"month name");
                            fd.append('amount', $scope.formDatas.amount);

                            fd.append('t_amount', $scope.admdata.addhostel.h_fee  / $scope.admdata.addhostel.h_inst - $scope.formDatas.amount);
                            // fd.append('subject3', $scope.form.subject3);
                            // fd.append('subject4', $scope.form.subject4);




                          var method = 'POST'
                          var url = '/enquiry/hostelFeeDiscount/'
                          if ($scope.formData.pk){
                            method = 'PATCH';
                            url = url+$scope.formData.pk + '/';
                          }
                          $scope.display=true;
                          $http({
                            method: method,
                            url: url,
                            data: fd,
                            transformRequest: angular.identity,
                            headers: {
                              'Content-Type': undefined
                            }
                          }).
                          then(function(response) {
                            // Flash.create('success', 'Admission data created successfully!')
                            $state.go('discount')
                        })
                        }

})

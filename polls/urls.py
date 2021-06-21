from django.conf.urls import include, url
from .views import *
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'receptions' , ReceptionsViewSet ,basename="receptions")
router.register(r'receptionsLite' , ReceptionsViewSetLite ,basename="receptionLite")
router.register(r'admission' , AdmissionViewSet ,basename="admission")
router.register(r'addclass' , AddClassViewSet ,basename="addclass")
router.register(r'addsection' , AddSectionViewSet ,basename="addsection")
router.register(r'root' , BusRootViewSet ,basename="root")
router.register(r'extraFee' , ExtraFeeStructureViewSet ,basename="extraFee")
router.register(r'addHostel' , AddHostelViewSet ,basename="addHostel")


router.register(r'incomeMode' , IncomeModeViewSet ,basename="incomeMode")
router.register(r'expenseMode' , ExpenseModeViewSet ,basename="expenseMode")

router.register(r'income' , IncomeViewSet ,basename="income")
router.register(r'expense' , ExpenseViewSet ,basename="expense")
router.register(r'addbank' , AddBankViewSet ,basename="addbank")

router.register(r'bankdepo' , BankDepositeViewSet ,basename="bankdepo")
router.register(r'bankwith' , BankWithdrawViewSet ,basename="bankwith")

router.register(r'adddepartment' , AddDepartmentViewSet ,basename="adddepartment")
router.register(r'addstaff' , AddStaffViewSet ,basename="bankwith")
router.register(r'addexamterm' , AddExamTermViewSet ,basename="addexamterm")

router.register(r'addsubject' , AddExamSubjectViewSet ,basename="addsubject")
router.register(r'classFeeDiscount' , ClassFeeDiscountViewSet ,basename="classFeeDiscount")
router.register(r'busFeeDiscount' , BusFeeDiscountViewSet ,basename="busFeeDiscount")
router.register(r'hostelFeeDiscount' , HostelFeeDiscountViewSet ,basename="hostelFeeDiscount")








urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'admissionPDF/$' , AdmissionDetailsPDF),
    url(r'feeReceiptPDF/$' , FeeReceiptDetailsPDF),


]

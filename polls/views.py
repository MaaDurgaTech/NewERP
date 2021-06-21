# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets  , serializers,permissions
from django.shortcuts import render
from django.shortcuts import render, redirect , get_object_or_404
from .models import *
from .serializers import *
from url_filter.integrations.drf import DjangoFilterBackend
import django_filters.rest_framework

from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
from django.utils.decorators import method_decorator

from django.contrib.auth.decorators import login_required
from .decorators import unauthenticated_user,allowed_user,admin_only
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.db.models import Q
# Create your views here.
def Home(request):
    return render(request, 'app.main.html')

def renderedStatic(request , filename):
    print (filename)
    return render(request , filename , {})


@unauthenticated_user
def loginpage(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username=='admin' or 'Admin':
            if password=='123456':
                return redirect('Home')
            else:
                 messages.warning(request, 'Invalid username or password!')

        # user = authenticate(username="admin", password="123456")
        # if user is not None:
        #     login(request, user)
        #     return redirect('home')
        # else:
        #     messages.warning(request, 'invalid user name or password')
    return render(request, 'app.login.html')


# @login_required(login_url='login')
# @method_decorator(csrf_exempt ,  name='dispatch')
class ReceptionsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ReceptionsSerializer
    queryset = Reception.objects.all()
    # filter_backends = [DjangoFilterBackend]
    # filter_fields = ['name']
    # def get_queryset(self):
    #     toReturn = Reception.objects.filter(user = self.request.user)
    #     if 'search' in self.request.GET:
    #         toReturn = toReturn.filter(Q(pk__icontains = self.request.GET['search'])|Q(name__icontains = self.request.GET['search']))
    #     return toReturn

    def get_queryset(self):
        params = self.request.GET
        if 'search' in params:
            toReturn = Reception.objects.filter(Q(pk__icontains = self.request.GET['search'])|Q(name__icontains = self.request.GET['search'])|Q(father_name__icontains = self.request.GET['search'])|Q(mother_name__icontains = self.request.GET['search'])|Q(f_mobile__icontains = self.request.GET['search']))
        else:
            toReturn = Reception.objects.all()

        return toReturn


class ReceptionsViewSetLite(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ReceptionsSerializerLite
    queryset = Reception.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['name']

class AdmissionViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AdmissionSerializer
    queryset = Admissions.objects.all()
    # print(queryset[::-1])
    # filter_backends = [DjangoFilterBackend]
    # filter_fields = ['name']
    def get_queryset(self):
        params = self.request.GET
        if 'search' in params:
            toReturn = Admissions.objects.filter(Q(pk__icontains = self.request.GET['search'])|Q(name__icontains = self.request.GET['search'])|Q(father_name__icontains = self.request.GET['search'])|Q(mother_name__icontains = self.request.GET['search'])|Q(f_mobile__icontains = self.request.GET['search'])|Q(admNo__icontains = self.request.GET['search']))
        else:
            toReturn = Admissions.objects.all()

        return toReturn



class AddClassViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AddClassSerializer
    queryset = AddClass.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['c_name']


# @method_decorator(csrf_exempt ,name='dispatch')
class AddSectionViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AddSectionSerializer
    queryset = AddSection.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['section']


class BusRootViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = BusRootSerializer
    queryset = BusRoot.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['root_name']



class ExtraFeeStructureViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ExtraFeeStructureSerializer
    queryset = ExtraFeeStructure.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['fee_name']


class AddHostelViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AddHostelSerializer
    queryset = AddHostel.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['h_name']


class IncomeModeViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = IncomeModeSerializer
    queryset = IncomeMode.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['mode_name']


class ExpenseModeViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ExepenseModeSerializer
    queryset = ExepenseMode.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['mode_name']

class IncomeViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = IncomeSerializer
    queryset = Income.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['date']



class ExpenseViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ExpenseSerializer
    queryset = Expense.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['date']



class AddBankViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AddBankSerializer
    queryset = AddBank.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['bank_name']


class BankDepositeViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = BankDepositeSerializer
    queryset = BankDeposite.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['date']


class BankWithdrawViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = BankWithdrawSerializer
    queryset = BankWithdraw.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['date']


class AddDepartmentViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AddDepartmentSerializer
    queryset = AddDepartment.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['department_name']


class AddStaffViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AddStaffSerializer
    queryset = AddStaff.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['name']


class AddExamTermViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AddExamTermSerializer
    queryset = AddExamTerm.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['term_name']



class AddExamSubjectViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AddExamSubjectSerializer
    queryset = AddExamSubject.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['subject1']



class ClassFeeDiscountViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ClassFeeDiscountSerializer
    queryset = ClassFeeDiscount.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['month']

class BusFeeDiscountViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = BusFeeDiscountSerializer
    queryset = BusFeeDiscount.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['month']



class HostelFeeDiscountViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = HostelFeeDiscountSerializer
    queryset = HostelFeeDiscount.objects.all()
    # print(queryset[::-1])
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['month']


from reportlab.pdfbase import pdfmetrics
# from reportlab.pdfbase.ttfonts import TTfont
from reportlab.platypus import SimpleDocTemplate

from io import BytesIO
from reportlab.pdfgen import canvas
from django.http import HttpResponse
from reportlab.lib.pagesizes import letter, landscape
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.pdfbase import pdfmetrics
# from reportlab.pdfbase.ttfonts import TTFont
# @login_required(login_url='login')

def AdmissionDetailsPDF(request):
    pkObj = request.GET
    print(request.GET,"nishantttttttttttttt")
    admObj=Admissions.objects.filter(pk=int(request.GET['id']))
    admObj = admObj[0]


    if admObj.name is not None:
        name = admObj.name
    else:
        name=''


    if admObj.gender is not None:
        gender = admObj.gender
    else:
        gender=''

    if admObj.father_name is not None:
        father_name = admObj.father_name
    else:
        father_name=''

    if admObj.f_occupation is not None:
        f_occupation = admObj.f_occupation
    else:
        f_occupation=''

    if admObj.f_qualification is not None:
        f_qualification = admObj.f_qualification
    else:
        f_qualification=''

    if admObj.f_mobile is not None:
        f_mobile = admObj.f_mobile
    else:
        f_mobile=''

    if admObj.mother_name is not None:
        mother_name = admObj.mother_name
    else:
        mother_name=''

    if admObj.l_address is not None:
        l_address = admObj.l_address
    else:
        l_address=''

    if admObj.admNo is not None:
        admNo = admObj.admNo
    else:
        admNo=''

    if admObj.rollNo is not None:
        rollNo = admObj.rollNo
    else:
        rollNo=''

    if admObj.email is not None:
        email = admObj.email
    else:
        email=''

    if admObj.cast is not None:
        cast = admObj.cast
    else:
        cast=''

    if admObj.religion is not None:
        religion = admObj.religion
    else:
        religion=''

    if admObj.p_address is not None:
        p_address = admObj.p_address
    else:
        p_address=''

    if admObj.m_occupation is not None:
        m_occupation = admObj.m_occupation
    else:
        m_occupation=''

    if admObj.m_qualification is not None:
        m_qualification = admObj.m_qualification
    else:
        m_qualification=''

    if admObj.alternateNo is not None:
        alternateNo = admObj.alternateNo
    else:
        alternateNo=''

    if admObj.busRoot is not None:
        busRoot = admObj.busRoot
    else:
        busRoot=''

    if admObj.dob is not None:
        dob = admObj.dob
    else:
        dob=''

    if admObj.admDate is not None:
        admDate = admObj.admDate
    else:
        admDate=''


    pdf=canvas.Canvas('abc.pdf')
    flow_obj=[]
    styles=getSampleStyleSheet()
    # pdfmetrics.registerFont(TTFont('Vera', 'Vera.ttf'))
    # pdfmetrics.registerFont(TTFont('VeraBd', 'VeraBd.ttf'))
    # pdfmetrics.registerFont(TTFont('VeraIt', 'VeraIt.ttf'))
    # pdfmetrics.registerFont(TTFont('VeraBI', 'VeraBI.ttf'))

    # canvas.setFont('Vera', 32)

    pdf.rect(10,10,575,820)

    pdf.drawString(230,790,"ABC PUBLIC SCHOOL")
    pdf.drawString(180,770,"Nursery, primary & juiner secondery school")
    pdf.drawString(180,755,"viil-bargown, po+distt-Nalanda, bihar 803111")
    pdf.drawString(230,740,"nishantdobriyal@gmail.com")
    pdf.drawString(230,725,"8709733247, 8434609140")
    pdf.rect(440,655,115,135)
    pdf.drawString(245,695,"ADMISSION DETAILS")

    pdf.line(240,693,350,693)
    pdf.drawString(260,683,"(2021-2022) ")
    pdf.rect(12,630,200,20)
    pdf.drawString(15,635," Admission No.:-  ")
    pdf.drawString(115,635,str(admNo))

    pdf.rect(380,630,203,20)
    pdf.drawString(383,635," Date of Admission:-  ")
    pdf.drawString(490,635,str(admDate))





    pdf.rect(12,605,570,20)

    pdf.drawString(15,611," STUDENT PERSONAL DETAILS")
    pdf.drawString(15,555,"1. Name of Student:-")
    pdf.drawString(130,555,str(name))
    pdf.line(120,553,580,553)

    pdf.drawString(15,530,"2. Date of Birth:-")
    pdf.drawString(85,530,str(dob))
    pdf.line(95,528,378,528)
    pdf.drawString(380,530,"(Please attech birth certificate - xerox)")
    pdf.drawString(15,505,"3. Class")
    pdf.line(60,503,378,503)
    pdf.drawString(380,505," Gender:-")
    pdf.drawString(435,505,str(gender))
    pdf.line(425,503,580,503)

    pdf.drawString(15,480,"4. Father's Name:-")
    pdf.drawString(125,480,str(father_name))
    pdf.line(107,478,580,478)

    pdf.drawString(15,455,"5. Mother's Name:-")
    pdf.drawString(125,455,str(mother_name))
    pdf.line(110,453,580,453)

    pdf.drawString(15,430,"6. Occupation : Father:-")
    pdf.drawString(155,430,str(f_occupation))
    pdf.line(135,428,378,428)

    pdf.drawString(380,430," Mother:-")
    pdf.drawString(440,430,str(m_occupation))
    pdf.line(425,428,580,428)

    pdf.drawString(15,405,"7. Eduction Qualification of Father:-")
    pdf.drawString(210,405,str(f_qualification))
    pdf.line(196,403,378,403)

    pdf.drawString(380,405," Mother:-")
    pdf.drawString(440,405,str(m_qualification))
    pdf.line(425,403,580,403)





    pdf.drawString(15,380,"8. Address:- Local:- ")
    pdf.drawString(125,380,str(l_address))
    pdf.line(113,378,580,378)
    pdf.line(20,355,580,355)


    pdf.drawString(15,330,"9. Address:- Permanent:-")
    pdf.drawString(155,330,str(p_address))
    pdf.line(143,328,580,328)
    pdf.line(20,305,580,305)


    pdf.drawString(15,280,"10. Mobile No. Father:-")
    pdf.drawString(140,280,str(f_mobile))
    pdf.line(130,278,378,278)

    pdf.drawString(380,280," Alternate No.:-")
    pdf.drawString(465,280,str(alternateNo))
    pdf.line(452,278,580,278)

    pdf.drawString(15,255,"11. Cast:-")
    pdf.drawString(80,255,str(cast))
    pdf.line(62,253,378,253)

    pdf.drawString(380,255," Religion:-")
    pdf.drawString(440,255,str(religion))
    pdf.line(425,253,580,253)

    pdf.drawString(15,230,"12. Bus Root:-")
    pdf.drawString(85,230,str(busRoot))
    pdf.line(85,228,378,228)

    pdf.drawString(380,230," Hostel:-")
    pdf.line(418,228,580,228)

    pdf.drawString(15,205,"13. Email-ID:-")
    pdf.drawString(100,205,str(email))
    pdf.line(90,203,580,203)

    pdf.drawString(65,100,"Father/Guardian")
    pdf.drawString(285,100,"Cashier")
    pdf.drawString(440,100,"Principal")





    pdf.save()
    pdf_filee=open('abc.pdf')
    response=HttpResponse(pdf_filee,content_type='application/pdf')
    response['Content-Disposition']='attachment; filename=aaaaa.pdf'
    return response


from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas

def FeeReceiptDetailsPDF(request):
    # pkObj = request.GET
    # admObj=Admission.objects.filter(pk=int(request.GET['id']))
    # admObj = admObj[0]
    #
    #
    # if admObj.name is not None:
    #     name = admObj.name
    # else:
    #     name=''
    #
    #
    # if admObj.gender is not None:
    #     gender = admObj.gender
    # else:
    #     gender=''
    #
    # if admObj.father_name is not None:
    #     father_name = admObj.father_name
    # else:
    #     father_name=''
    #
    # if admObj.f_occupation is not None:
    #     f_occupation = admObj.f_occupation
    # else:
    #     f_occupation=''
    #
    # if admObj.f_qualification is not None:
    #     f_qualification = admObj.f_qualification
    # else:
    #     f_qualification=''
    #
    # if admObj.f_mobile is not None:
    #     f_mobile = admObj.f_mobile
    # else:
    #     f_mobile=''
    #
    # if admObj.mother_name is not None:
    #     mother_name = admObj.mother_name
    # else:
    #     mother_name=''
    #
    # if admObj.l_address is not None:
    #     l_address = admObj.l_address
    # else:
    #     l_address=''
    #
    # if admObj.admNo is not None:
    #     admNo = admObj.admNo
    # else:
    #     admNo=''
    #
    # if admObj.rollNo is not None:
    #     rollNo = admObj.rollNo
    # else:
    #     rollNo=''
    #
    # if admObj.email is not None:
    #     email = admObj.email
    # else:
    #     email=''
    #
    # if admObj.cast is not None:
    #     cast = admObj.cast
    # else:
    #     cast=''
    #
    # if admObj.religion is not None:
    #     religion = admObj.religion
    # else:
    #     religion=''
    #
    # if admObj.p_address is not None:
    #     p_address = admObj.p_address
    # else:
    #     p_address=''
    #
    # if admObj.m_occupation is not None:
    #     m_occupation = admObj.m_occupation
    # else:
    #     m_occupation=''
    #
    # if admObj.m_qualification is not None:
    #     m_qualification = admObj.m_qualification
    # else:
    #     m_qualification=''
    #
    # if admObj.alternateNo is not None:
    #     alternateNo = admObj.alternateNo
    # else:
    #     alternateNo=''
    #
    # if admObj.busRoot is not None:
    #     busRoot = admObj.busRoot
    # else:
    #     busRoot=''
    #
    # if admObj.dob is not None:
    #     dob = admObj.dob
    # else:
    #     dob=''
    #
    # if admObj.admDate is not None:
    #     admDate = admObj.admDate
    # else:
    #     admDate=''


    pdf=canvas.Canvas('def.pdf')
    flow_obj=[]
    styles=getSampleStyleSheet()
    # pdfmetrics.registerFont(TTFont('Vera', 'Vera.ttf'))
    # pdfmetrics.registerFont(TTFont('VeraBd', 'VeraBd.ttf'))
    # pdfmetrics.registerFont(TTFont('VeraIt', 'VeraIt.ttf'))
    # pdfmetrics.registerFont(TTFont('VeraBI', 'VeraBI.ttf'))

    # canvas.setFont('Vera', 32)

    pdf.rect(10,10,280,820)
    pdf.setFillColorRGB(0.0/120,0.0/120,0.0/120)
    pdf.setStrokeColor(colors.black)
    pdf.rect(300,10,280,820)
    # pdf.line(287,10,297,820)
    pdf.drawString(15,810,"LOGO")
    pdf.drawString(105,810,"ABC PUBLIC SCHOOL")
    pdf.drawString(305,810,"LOGO")
    pdf.drawString(390,810,"ABC PUBLIC SCHOOL")

    pdf.drawString(80,790,"primary & juiner secondery school")
    pdf.drawString(60,775,"Bargown, po+distt-Nalanda, bihar 803111")
    pdf.drawString(100,760,"nishantdobriyal@gmail.com")
    pdf.drawString(110,745,"8709733247, 8434609140")
    pdf.drawString(370,790,"primary & juiner secondery school")
    pdf.drawString(350,775,"Bargown, po+distt-Nalanda, bihar 803111")
    pdf.drawString(390,760,"nishantdobriyal@gmail.com")
    pdf.drawString(395,745,"8709733247, 8434609140")

    pdf.line(10,735,290,735)
    pdf.line(300,735,580,735)
    pdf.line(10,730,290,730)
    pdf.line(300,730,580,730)

    pdf.drawString(15,710,"Adm. No.:-")
    pdf.drawString(15,695,"Name:-")
    pdf.drawString(15,680,"Class:-")
    pdf.drawString(15,665,"Father's Name:-")
    pdf.drawString(15,650,"Mother's Name:-")
    pdf.drawString(170,710,"Receipt No.:-")
    pdf.drawString(170,695,"Date:-")
    pdf.drawString(170,680,"Month:-")
    pdf.drawString(170,665,"Mode:-")
    pdf.drawString(170,650,"Issued By:-")


    pdf.drawString(305,710,"Adm. No.:-")
    pdf.drawString(305,695,"Name:-")
    pdf.drawString(305,680,"Class:-")
    pdf.drawString(305,665,"Father's Name:-")
    pdf.drawString(305,650,"Mother's Name:-")
    pdf.drawString(460,710,"Receipt No.:-")
    pdf.drawString(460,695,"Date:-")
    pdf.drawString(460,680,"Month:-")
    pdf.drawString(460,665,"Mode:-")
    pdf.drawString(460,650,"Issued By:-")

    pdf.line(10,640,290,640)
    pdf.line(300,640,580,640)
    pdf.line(10,635,290,635)
    pdf.line(300,635,580,635)

    # pdf.drawString(305,620,"S. No")
    # pdf.line(340,635,340,525)
    # pdf.drawString(350,620,"Payment Head")
    # pdf.line(440,635,440,525)
    # pdf.drawString(450,620,"Payble Amt.")
    # pdf.line(520,635,520,525)
    # pdf.drawString(525,620,"Paid Amt.")

    pdf.drawString(15,620,"S. No")
    # pdf.line(50,635,50,525)
    pdf.drawString(60,620,"Fee Head")
    # pdf.line(150,635,150,525)
    pdf.drawString(160,620,"Payble Amt.")
    # pdf.line(230,635,230,525)
    pdf.drawString(235,620,"Paid Amt.")

    pdf.line(10,613,290,613)


    sn=[1,2,3,4,5]
    fhead=["aaa","sss","ddd","fff","ggg"]
    pamt=[100,200,300,400,500]
    paid=[1000,2000,300,4000,5000]
    k=600
    for i in sn:
        pdf.drawString(20,k,str(i))
        pdf.line(10,k-6,290,k-6)
        pdf.line(50,k+35,50,k-6)

        k-=20
    k=600
    for i in fhead:
        pdf.drawString(60,k,str(i))
        pdf.line(150,k+35,150,k-6)
        k-=20
    k=600
    for i in pamt:
        pdf.drawString(160,k,str(i))
        pdf.line(230,k+35,230,k-6)
        k-=20
    k=600
    for i in paid:
        pdf.drawString(235,k,str(i))
        k-=20



    sn=[1,2,3,4,5]
    fhead=["aaa","sss","ddd","fff","ggg"]
    pamt=[100,200,300,400,500]
    paid=[1000,2000,300,4000,5000]
    k=600
    for i in sn:
        pdf.drawString(305,k,str(i))
        pdf.line(10,k-6,290,k-6)
        pdf.line(50,k+35,50,k-6)

        k-=20
    k=600
    for i in fhead:
        pdf.drawString(350,k,str(i))
        pdf.line(150,k+35,150,k-6)
        k-=20
    k=600
    for i in pamt:
        pdf.drawString(450,k,str(i))
        pdf.line(230,k+35,230,k-6)
        k-=20
    k=600
    for i in paid:
        pdf.drawString(525,k,str(i))
        k-=20

    # pdf.line(300,613,580,613)
    # pdf.line(300,591,580,591)
    # pdf.line(10,569,290,569)
    # pdf.line(300,569,580,569)
    # pdf.line(10,547,290,547)
    # pdf.line(300,547,580,547)
    # pdf.line(10,525,290,525)
    # pdf.line(300,525,580,525)
    # pdf.line(10,503,290,503)
    # pdf.line(300,503,580,503)
    #
    # pdf.drawString(60,515,"Total Amount")
    # pdf.drawString(350,515,"Total Amount")




    pdf.save()
    pdf_filee=open('def.pdf')
    response=HttpResponse(pdf_filee,content_type='application/pdf')
    response['Content-Disposition']='attachment; filename=bbbbb.pdf'
    return response

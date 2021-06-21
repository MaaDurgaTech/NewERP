# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models




class AddClass(models.Model):
    created = models.DateTimeField(auto_now_add = True)
    c_name = models.CharField(max_length=20 , null = True)
    c_fee = models.CharField(max_length=20 , null = True)
    f_inst = models.CharField(max_length=20 , null = True)
    subject1=models.CharField(max_length=50,null=True)
    marks1=models.CharField(max_length=50,null=True)
    subject2=models.CharField(max_length=50,null=True)
    marks2=models.CharField(max_length=50,null=True)
    subject3=models.CharField(max_length=50,null=True)
    marks3=models.CharField(max_length=50,null=True)
    subject4=models.CharField(max_length=50,null=True)
    marks4=models.CharField(max_length=50,null=True)
    subject5=models.CharField(max_length=50,null=True)
    marks5=models.CharField(max_length=50,null=True)
    subject6=models.CharField(max_length=50,null=True)
    marks6=models.CharField(max_length=50,null=True)
    subject7=models.CharField(max_length=50,null=True)
    marks7=models.CharField(max_length=50,null=True)
    subject8=models.CharField(max_length=50,null=True)
    marks8=models.CharField(max_length=50,null=True)
    subject9=models.CharField(max_length=50,null=True)
    marks9=models.CharField(max_length=50,null=True)
    subject10=models.CharField(max_length=50,null=True)
    marks10=models.CharField(max_length=50,null=True)
    subject11=models.CharField(max_length=50,null=True)
    marks11=models.CharField(max_length=50,null=True)
    subject12=models.CharField(max_length=50,null=True)
    marks12=models.CharField(max_length=50,null=True)
    subject13=models.CharField(max_length=50,null=True)
    marks13=models.CharField(max_length=50,null=True)
    subject14=models.CharField(max_length=50,null=True)
    marks14=models.CharField(max_length=50,null=True)
    subject15=models.CharField(max_length=50,null=True)
    marks15=models.CharField(max_length=50,null=True)
class Reception(models.Model):
    addclass = models.ForeignKey(AddClass, related_name='reception',null=True,blank=False,on_delete=models.CASCADE)

    created = models . DateField(null = True)
    name = models.CharField (max_length = 100 , null = True)
    admissionClass = models.TextField(max_length=100 , null = True)
    gender = models . CharField(max_length=10 , null = True)

    dob = models . DateField (null = True)
    # email = models . EmailField (max_length = 100 , null = True)
    father_name = models . CharField (max_length = 100 , null = True)
    f_occupation = models . CharField (max_length = 100 , null = True)
    f_qualification = models . CharField (max_length = 100 , null = True)
    f_mobile = models . CharField (max_length=100 , null = True)
    mother_name = models . CharField (max_length = 100 , null = True)
    # m_occupation = models . CharField (max_length = 100 , null = True)
    # m_qualification = models . CharField (max_length = 100 , null = True)



    # alternateNo = models . CharField (max_length=100 , null = True)
    l_address = models . TextField (max_length = 5000 , null=True)
    # p_address = models . TextField (max_length = 5000 , null=True)
    testDate = models.DateTimeField(auto_now_add = True)
    testTime = models.DateTimeField(auto_now_add = True)
    # studentImage = models . ImageField (upload_to = 'static/images', null = True)
    # studentAadhar = models . ImageField (upload_to = 'static/images', null = True)
    # studentDOBCer = models . ImageField (upload_to = 'static/images', null = True)
    # studentTC = models . ImageField (upload_to = 'static/images', null = True)

CAST_CHOICES = (
    ('GENRAL', 'GENRAL'),
    ('OBC', 'OBC'),
    ('SC/ST', 'SC/ST'),
    ('Other', 'Other'),

)
RELIGION_CHOICES = (
    ('HINDU', 'HINDU'),
    ('MUSLIM', 'MUSLIM'),
    ('Other', 'Other'),

)
STUDENTTYPE_CHOICES = (
    ('ALL STUDENT', 'ALL STUDENT'),
    ('NEW', 'NEW'),
    ('OLD', 'OLD'),

)

class ExtraFeeStructure(models.Model):
    reception = models.ForeignKey(Reception, related_name='extraFeeStructure',null=True,blank=False,on_delete=models.CASCADE)
    addclass = models.ForeignKey(AddClass, related_name='extraFeeStructure',null=True,blank=False,on_delete=models.CASCADE)

    created = models.DateTimeField(auto_now_add = True)
    fee_name = models.CharField(max_length=50 , null = True)
    extra_fee = models.CharField(max_length=20 , null = True)
    month=models.CharField(max_length=20, null=True)
    stdType = models.TextField(default = 'NEW' , choices = STUDENTTYPE_CHOICES)


class BusRoot(models.Model):
    created = models.DateTimeField(auto_now_add = True)
    bus_name = models.CharField(max_length=50 , null = True)
    root_name = models.CharField(max_length=50 , null = True)
    root_fee = models.CharField(max_length=20 , null = True)
    root_inst = models.CharField(max_length=20 , null = True)

class AddSection(models.Model):
    created = models.DateTimeField(auto_now_add = True)
    section = models.CharField(max_length=20 , null = True)

class AddHostel(models.Model):
    # addclass = models.ForeignKey(AddClass, related_name='addHostel',null=True,blank=False,on_delete=models.CASCADE)
    # admission = models.ForeignKey(Admissions, related_name='addHostel',null=True,blank=False,on_delete=models.CASCADE)
    # reception = models.ForeignKey(Reception, related_name='addHostel',null=True,blank=False,on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add = True)
    h_name = models.CharField(max_length=20 , null = True)
    h_fee = models.CharField(max_length=20 , null = True)
    h_inst = models.CharField(max_length=20 , null = True)
    h_instruction = models.CharField(max_length=1000 , null = True)


class Admissions(models.Model):
    reception = models.ForeignKey(Reception, related_name='admissions',null=True,blank=False,on_delete=models.CASCADE)
    addclass = models.ForeignKey(AddClass, related_name='admissions',null=True,blank=False,on_delete=models.CASCADE)
    busRoot = models.ForeignKey(BusRoot, related_name='admissions',null=True,blank=False,on_delete=models.CASCADE)
    addsection = models.ForeignKey(AddSection, related_name='admissions',null=True,blank=False,on_delete=models.CASCADE)
    addhostel = models.ForeignKey(AddHostel, related_name='admissions',null=True,blank=False,on_delete=models.CASCADE)

    created = models.DateField(auto_now_add = True)
    name = models.CharField (max_length = 100 , null = True)
    admissionClass = models.TextField(max_length=100 , null = True)
    gender = models . CharField(max_length=10 , null = True)

    dob = models . DateField (null = True)
    father_name = models . CharField (max_length = 100 , null = True)
    f_occupation = models . CharField (max_length = 100 , null = True)
    f_qualification = models . CharField (max_length = 100 , null = True)
    f_mobile = models . CharField (max_length=100 , null = True)
    mother_name = models . CharField (max_length = 100 , null = True)
    l_address = models . TextField (max_length = 5000 , null=True)

    admDate = models.DateField(auto_now_add = True)
    # admdate=models.DateField(auto_now_add = True)
    admNo = models . CharField (max_length = 20 , null=True)
    admClass = models.CharField(max_length=100 , null = True)
    section = models.CharField(max_length=10 , null = True)
    rollNo = models.CharField(max_length=200 , null = True)
    email = models . EmailField (max_length = 100 , null = True)
    # busRoot = models.TextField(max_length=100 , null = True)

    # hostel = models.BooleanField(default=False)
    # hostelTyoe = models.BooleanField(default=False)
    cast = models.TextField(default = 'GENRAL' , choices = CAST_CHOICES)
    religion = models.TextField(default = 'HINDU' , choices = RELIGION_CHOICES)
    p_address = models . TextField (max_length = 5000 , null=True)
    m_occupation = models . CharField (max_length = 100 , null = True)
    m_qualification = models . CharField (max_length = 100 , null = True)
    alternateNo = models . CharField (max_length=100 , null = True)
    studentImage = models . ImageField (upload_to = 'static/images', null = True)
    studentAadhar = models . ImageField (upload_to = 'static/images', null = True)
    studentDOBCer = models . ImageField (upload_to = 'static/images', null = True)
    studentTC = models . ImageField (upload_to = 'static/images', null = True)





class IncomeMode(models.Model):
    created = models.DateField(auto_now_add = True)
    mode_name = models.CharField(max_length=20 , null = True)
    # mode_type = models.CharField(max_length=20 , null = True)

class ExepenseMode(models.Model):
    created = models.DateField(auto_now_add = True)
    mode_name = models.CharField(max_length=20 , null = True)
    mode_type = models.CharField(max_length=20 , null = True)
class Income(models.Model):
    incomemode = models.ForeignKey(IncomeMode, related_name='income',null=True,blank=False,on_delete=models.CASCADE)
    created = models.DateField(auto_now_add = True)
    income_details = models.TextField(max_length=2000 , null = True)
    date = models.DateField(auto_now_add = True)
    amount = models.CharField(max_length=200 , null = True)
    goods = models.CharField(max_length=2000 , null = True)
    cheque_no = models.CharField(max_length=200 , null = True)
    bank_name= models.CharField(max_length=200 , null = True)
    descrption=models.TextField(max_length=2000 , null = True)
    income_type = models.CharField(max_length=20 , null = True)

class Expense(models.Model):
    expenseMode = models.ForeignKey(ExepenseMode, related_name='expense',null=True,blank=False,on_delete=models.CASCADE)
    created = models.DateField(auto_now_add = True)
    expense_details = models.TextField(max_length=2000 , null = True)
    date = models.DateField(auto_now_add = True)
    amount = models.CharField(max_length=200 , null = True)
    expense_type = models.CharField(max_length=20 , null = True)
    cheque_no = models.CharField(max_length=200 , null = True)
    bank_name= models.CharField(max_length=200 , null = True)

class AddBank(models.Model):
    created = models.DateField(auto_now_add = True)
    bank_name = models.CharField(max_length=50 , null = True)
    acc_no = models.CharField(max_length=30 , null = True)
    ifsc = models.CharField(max_length=30 , null = True)
    address = models.TextField(max_length=2000 , null = True)


class BankDeposite(models.Model):
    addbank = models.ForeignKey(AddBank, related_name='bankdeposite',null=True,blank=False,on_delete=models.CASCADE)
    created = models.DateField(auto_now_add = True)
    depo_details = models.TextField(max_length=2000 , null = True)
    date = models.DateField(auto_now_add = True)
    amount = models.CharField(max_length=200 , null = True)
    income_type = models.CharField(max_length=20 , null = True)
    cheque_no = models.CharField(max_length=200 , null = True)
    bank_name= models.CharField(max_length=200 , null = True )
    depo_name= models.CharField(max_length=200 , null = True)


class BankWithdraw(models.Model):
    addbank = models.ForeignKey(AddBank, related_name='bankwithdraw',null=True,blank=False,on_delete=models.CASCADE)
    created = models.DateField(auto_now_add = True)
    with_details = models.TextField(max_length=2000 , null = True)
    date = models.DateField(auto_now_add = True)
    amount = models.CharField(max_length=200 , null = True)
    income_type = models.CharField(max_length=20 , null = True)
    cheque_no = models.CharField(max_length=200 , null = True)
    bank_name= models.CharField(max_length=200 , null = True )
    depo_name= models.CharField(max_length=200 , null = True)




class AddDepartment(models.Model):
    created=models.DateField(auto_now_add = True)
    department_name=models.CharField(max_length=50,null=True)

class AddStaff(models.Model):
    department = models.ForeignKey(AddDepartment, related_name='addstaff',null=True,blank=False,on_delete=models.CASCADE)
    created = models.DateField(auto_now_add = True)
    j_date = models.DateField(auto_now_add = True)
    designation = models.CharField (max_length = 100 , null = True)
    basicSal = models.CharField (max_length = 100 , null = True)
    gender = models . CharField(max_length=10 , null = True)
    subject = models . CharField(max_length=10 , null = True)
    name = models.CharField (max_length = 100 , null = True)
    dob = models . DateField (null = True)
    father_name = models . CharField (max_length = 100 , null = True)
    mobile = models . CharField (max_length=100 , null = True)
    mother_name = models . CharField (max_length = 100 , null = True)
    husband_name = models . CharField (max_length = 100 , null = True)
    staff_qualification = models . CharField (max_length = 100 , null = True)
    bankSal = models.CharField (max_length = 100 , null = True)
    l_address = models . TextField (max_length = 5000 , null=True)
    email = models . EmailField (max_length = 100 , null = True)
    p_address = models . TextField (max_length = 5000 , null=True)
    alternateNo = models . CharField (max_length=100 , null = True)
    staffImage = models . ImageField (upload_to = 'static/images', null = True)


class AddExamTerm(models.Model):
    created=models.DateField(auto_now_add = True)
    term_name=models.CharField(max_length=50,null=True)




class AddExamSubject(models.Model):
    addclass = models.ForeignKey(AddClass, related_name='addexamsubject',null=True,blank=False,on_delete=models.CASCADE)
    examterm = models.ForeignKey(AddExamTerm, related_name='addexamsubject',null=True,blank=False,on_delete=models.CASCADE)
    created=models.DateField(auto_now_add = True)
    subject1=models.CharField(max_length=50,null=True)
    marks1=models.CharField(max_length=50,null=True)
    subject2=models.CharField(max_length=50,null=True)
    marks2=models.CharField(max_length=50,null=True)
    subject3=models.CharField(max_length=50,null=True)
    marks3=models.CharField(max_length=50,null=True)
    subject4=models.CharField(max_length=50,null=True)
    marks4=models.CharField(max_length=50,null=True)
    subject5=models.CharField(max_length=50,null=True)
    marks5=models.CharField(max_length=50,null=True)
    subject6=models.CharField(max_length=50,null=True)
    marks6=models.CharField(max_length=50,null=True)
    subject7=models.CharField(max_length=50,null=True)
    marks7=models.CharField(max_length=50,null=True)
    subject8=models.CharField(max_length=50,null=True)
    marks8=models.CharField(max_length=50,null=True)
    subject9=models.CharField(max_length=50,null=True)
    marks9=models.CharField(max_length=50,null=True)
    subject10=models.CharField(max_length=50,null=True)
    marks10=models.CharField(max_length=50,null=True)
    subject11=models.CharField(max_length=50,null=True)
    marks11=models.CharField(max_length=50,null=True)
    subject12=models.CharField(max_length=50,null=True)
    marks12=models.CharField(max_length=50,null=True)
    subject13=models.CharField(max_length=50,null=True)
    marks13=models.CharField(max_length=50,null=True)
    subject14=models.CharField(max_length=50,null=True)
    marks14=models.CharField(max_length=50,null=True)
    subject15=models.CharField(max_length=50,null=True)
    marks15=models.CharField(max_length=50,null=True)

class ClassFeeDiscount(models.Model):
    addclass = models.ForeignKey(AddClass, related_name='classFeeDiscount',null=True,blank=False,on_delete=models.CASCADE)
    addsection = models.ForeignKey(AddSection, related_name='classFeeDiscount',null=True,blank=False,on_delete=models.CASCADE)
    addadmission = models.ForeignKey(Admissions, related_name='classFeeDiscount',null=True,blank=False,on_delete=models.CASCADE)

    created=models.DateField(auto_now_add = True)
    amount=models.CharField(max_length=500,null=True)
    month=models.CharField(max_length=50,null=True)
    t_amount=models.CharField(max_length=50,null=True)

class BusFeeDiscount(models.Model):
    addclass = models.ForeignKey(AddClass, related_name='busFeeDiscount',null=True,blank=False,on_delete=models.CASCADE)
    addsection = models.ForeignKey(AddSection, related_name='busFeeDiscount',null=True,blank=False,on_delete=models.CASCADE)
    addadmission = models.ForeignKey(Admissions, related_name='busFeeDiscount',null=True,blank=False,on_delete=models.CASCADE)

    created=models.DateField(auto_now_add = True)
    amount=models.CharField(max_length=500,null=True)
    month=models.CharField(max_length=50,null=True)
    t_amount=models.CharField(max_length=50,null=True)

class HostelFeeDiscount(models.Model):
    addclass = models.ForeignKey(AddClass, related_name='hostelFeeDiscount',null=True,blank=False,on_delete=models.CASCADE)
    addsection = models.ForeignKey(AddSection, related_name='hostelFeeDiscount',null=True,blank=False,on_delete=models.CASCADE)
    addadmission = models.ForeignKey(Admissions, related_name='hostelFeeDiscount',null=True,blank=False,on_delete=models.CASCADE)

    created=models.DateField(auto_now_add = True)
    amount=models.CharField(max_length=500,null=True)
    month=models.CharField(max_length=50,null=True)
    t_amount=models.CharField(max_length=50,null=True)

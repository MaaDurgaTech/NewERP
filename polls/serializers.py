from rest_framework import serializers
from rest_framework.exceptions import *
from .models import *


class ReceptionsSerializerLite(serializers.ModelSerializer):
    class Meta:
        model=Reception
        fields=['pk','created','name','admissionClass','gender','dob','father_name','f_occupation','f_qualification','f_mobile','mother_name','l_address','testDate','testTime']
class AddClassSerializer(serializers.ModelSerializer):
    class Meta:
        model=AddClass
        fields=['pk','created','c_name','c_fee','f_inst','subject1','marks1','subject2','marks2','subject3','marks3','subject4','marks4','subject5','marks5','subject6','marks6','subject7','marks7','subject8','marks8','subject9','marks9','subject10','marks10','subject11','marks11','subject12','marks12','subject13','marks13','subject14','marks14','subject15','marks15']


class AddSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model=AddSection
        fields=['pk','created','section']


class BusRootSerializer(serializers.ModelSerializer):
    class Meta:
        model=BusRoot
        fields=['pk','created','bus_name','root_name','root_fee','root_inst']


class AddHostelSerializer(serializers.ModelSerializer):
    class Meta:
        model=AddHostel
        fields=['pk','created','h_name','h_fee','h_inst','h_instruction']





class ReceptionsSerializer(serializers.ModelSerializer):
    addclass = AddClassSerializer(many=False , read_only=True)
    class Meta:
        model=Reception
        fields=['pk','addclass','created','name','admissionClass','gender','dob','father_name','f_occupation','f_qualification','f_mobile','mother_name','l_address','testDate','testTime']
    def create(self , validated_data):
        a = Reception.objects.create(**validated_data)
        a.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))
        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','name','admissionClass','gender','dob','father_name','f_occupation','f_qualification','f_mobile','mother_name','l_address','testDate','testTime']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))

        instance.save()
        return instance



class AdmissionSerializer(serializers.ModelSerializer):
    addclass = AddClassSerializer(many=False , read_only=True)
    addsection=AddSectionSerializer(many=False , read_only=True)
    busRoot=BusRootSerializer(many=False , read_only=True)
    addhostel=AddHostelSerializer(many=False , read_only=True)

    class Meta:
        model=Admissions
        fields=['pk','addclass','addsection','busRoot','addhostel','created','name','admissionClass','gender','dob','father_name','f_occupation','f_qualification','f_mobile','mother_name','l_address','admDate','admNo','admClass','section','rollNo','email','cast','religion','p_address','m_occupation','m_qualification','alternateNo','studentImage','studentAadhar','studentDOBCer','studentTC']
    def create(self , validated_data):
        a = Admissions.objects.create(**validated_data)
        a.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))
        a.addsection = AddSection.objects.get(pk = int(self.context['request'].data['addsection']))
        a.busRoot = BusRoot.objects.get(pk = int(self.context['request'].data['busRoot']))
        a.addhostel = AddHostel.objects.get(pk = int(self.context['request'].data['addhostel']))


        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','name','admissionClass','gender','dob','father_name','f_occupation','f_qualification','f_mobile','mother_name','l_address','admDate','admNo','admClass','section','rollNo','email','cast','religion','p_address','m_occupation','m_qualification','alternateNo','studentImage','studentAadhar','studentDOBCer','studentTC']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))
        instance.addsection = AddSection.objects.get(pk = int(self.context['request'].data['addsection']))
        instance.busRoot = BusRoot.objects.get(pk = int(self.context['request'].data['busRoot']))
        instance.addhostel = AddHostel.objects.get(pk = int(self.context['request'].data['addhostel']))



        instance.save()
        return instance




class ExtraFeeStructureSerializer(serializers.ModelSerializer):
    # addclass= AddClassSerializer()
    class Meta:
        model=ExtraFeeStructure
        fields=['pk','created','fee_name','extra_fee','stdType','month']


class AddHostelSerializer(serializers.ModelSerializer):
    class Meta:
        model=AddHostel
        fields=['pk','created','h_name','h_fee','h_inst','h_instruction']



class IncomeModeSerializer(serializers.ModelSerializer):
    class Meta:
        model=IncomeMode
        fields=['pk','created','mode_name']


class ExepenseModeSerializer(serializers.ModelSerializer):
    class Meta:
        model=ExepenseMode
        fields=['pk','created','mode_name','mode_type']

class IncomeSerializer(serializers.ModelSerializer):
    incomemode=IncomeModeSerializer(many=False , read_only=True)
    class Meta:
        model=Income
        fields=['pk','incomemode','created','income_details','date','amount','goods','cheque_no','bank_name','descrption','income_type']
    def create(self , validated_data):
        a = Income.objects.create(**validated_data)
        a.incomemode = IncomeMode.objects.get(pk = int(self.context['request'].data['incomemode']))
        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','income_details','date','amount','goods','cheque_no','bank_name','descrption','income_type']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.incomemode = IncomeMode.objects.get(pk = int(self.context['request'].data['incomemode']))
        instance.save()
        return instance

class ExpenseSerializer(serializers.ModelSerializer):
    expenseMode=ExepenseModeSerializer(many=False , read_only=True)
    class Meta:
        model=Expense
        fields=['pk','expenseMode','created','expense_details','date','amount','expense_type','cheque_no','bank_name']

    def create(self , validated_data):
        a = Expense.objects.create(**validated_data)
        a.expenseMode = ExepenseMode.objects.get(pk = int(self.context['request'].data['expenseMode']))
        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','expense_details','date','amount','expense_type','cheque_no','bank_name']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.expenseMode = ExepenseMode.objects.get(pk = int(self.context['request'].data['expenseMode']))
        instance.save()
        return instance


class AddBankSerializer(serializers.ModelSerializer):
    class Meta:
        model=AddBank
        fields=['pk','created','bank_name','acc_no','ifsc','address']



class BankDepositeSerializer(serializers.ModelSerializer):
    addbank=AddBankSerializer(many=False , read_only=True)
    class Meta:
        model=BankDeposite
        fields=['pk','addbank','created','depo_details','date','amount','income_type','cheque_no','bank_name','depo_name']

    def create(self , validated_data):
        a = BankDeposite.objects.create(**validated_data)
        a.addbank = AddBank.objects.get(pk = int(self.context['request'].data['addbank']))
        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','depo_details','date','amount','income_type','cheque_no','bank_name','depo_name']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.addbank = AddBank.objects.get(pk = int(self.context['request'].data['addbank']))
        instance.save()
        return instance


class BankWithdrawSerializer(serializers.ModelSerializer):
    addbank=AddBankSerializer(many=False , read_only=True)
    class Meta:
        model=BankWithdraw
        fields=['pk','addbank','created','with_details','date','amount','income_type','cheque_no','bank_name','depo_name']

    def create(self , validated_data):
        a = BankWithdraw.objects.create(**validated_data)
        a.addbank = AddBank.objects.get(pk = int(self.context['request'].data['addbank']))
        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','with_details','date','amount','income_type','cheque_no','bank_name','depo_name']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.addbank = AddBank.objects.get(pk = int(self.context['request'].data['addbank']))
        instance.save()
        return instance



class AddDepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=AddDepartment
        fields=['pk','created','department_name']


class AddStaffSerializer(serializers.ModelSerializer):
    department=AddDepartmentSerializer(many=False , read_only=True)

    class Meta:
        model=AddStaff
        fields=['pk','department','created','j_date','designation','basicSal','gender','subject','name','dob','father_name','mobile','mother_name','husband_name','staff_qualification','bankSal','l_address','email','p_address','alternateNo','staffImage']

    def create(self , validated_data):
        a = AddStaff.objects.create(**validated_data)
        a.department = AddDepartment.objects.get(pk = int(self.context['request'].data['department']))
        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','j_date','designation','basicSal','gender','subject','name','dob','father_name','mobile','mother_name','husband_name','staff_qualification','bankSal','l_address','email','p_address','alternateNo','staffImage']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.department = AddDepartment.objects.get(pk = int(self.context['request'].data['department']))

        instance.save()
        return instance



class AddExamTermSerializer(serializers.ModelSerializer):
    class Meta:
        model=AddExamTerm
        fields=['pk','created','term_name']


class AddExamSubjectSerializer(serializers.ModelSerializer):
    addclass = AddClassSerializer(many=False , read_only=True)
    class Meta:
        model=AddExamSubject
        fields=['pk','addclass','created','subject1','marks1','subject2','marks2','subject3','marks3','subject4','marks4','subject5','marks5','subject6','marks6','subject7','marks7','subject8','marks8','subject9','marks9','subject10','marks10','subject11','marks11','subject12','marks12','subject13','marks13','subject14','marks14','subject15','marks15']

    def create(self , validated_data):
        a = AddExamSubject.objects.create(**validated_data)
        a.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))
        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','subject1','marks1','subject2','marks2','subject3','marks3','subject4','marks4','subject5','marks5','subject6','marks6','subject7','marks7','subject8','marks8','subject9','marks9','subject10','marks10','subject11','marks11','subject12','marks12','subject13','marks13','subject14','marks14','subject15','marks15']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))

        instance.save()
        return instance



class ClassFeeDiscountSerializer(serializers.ModelSerializer):
    # addclass = AddClassSerializer(many=False , read_only=True)
    # addsection=AddSectionSerializer(many=False , read_only=True)
    addadmission=AdmissionSerializer(many=False , read_only=True)
    class Meta:
        model=ClassFeeDiscount
        fields=['pk','addadmission','created','amount','month','t_amount']
    def create(self , validated_data):
        a = ClassFeeDiscount.objects.create(**validated_data)
        # a.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))
        # a.addsection = AddSection.objects.get(pk = int(self.context['request'].data['addsection']))
        a.addadmission = Admissions.objects.get(pk = int(self.context['request'].data['addadmission']))

        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','amount','month','t_amount']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))
        instance.addsection = AddSection.objects.get(pk = int(self.context['request'].data['addsection']))
        instance.addadmission = Admissions.objects.get(pk = int(self.context['request'].data['addadmission']))

        instance.save()
        return instance


class BusFeeDiscountSerializer(serializers.ModelSerializer):
    # addclass = AddClassSerializer(many=False , read_only=True)
    # addsection=AddSectionSerializer(many=False , read_only=True)
    addadmission=AdmissionSerializer(many=False , read_only=True)
    class Meta:
        model=BusFeeDiscount
        fields=['pk','addadmission','created','amount','month','t_amount']
    def create(self , validated_data):
        a = BusFeeDiscount.objects.create(**validated_data)
        # a.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))
        # a.addsection = AddSection.objects.get(pk = int(self.context['request'].data['addsection']))
        a.addadmission = Admissions.objects.get(pk = int(self.context['request'].data['addadmission']))

        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','amount','month','t_amount']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))
        instance.addsection = AddSection.objects.get(pk = int(self.context['request'].data['addsection']))
        instance.addadmission = Admissions.objects.get(pk = int(self.context['request'].data['addadmission']))

        instance.save()
        return instance



class HostelFeeDiscountSerializer(serializers.ModelSerializer):
    # addclass = AddClassSerializer(many=False , read_only=True)
    # addsection=AddSectionSerializer(many=False , read_only=True)
    addadmission=AdmissionSerializer(many=False , read_only=True)
    class Meta:
        model=HostelFeeDiscount
        fields=['pk','addadmission','created','amount','month','t_amount']
    def create(self , validated_data):
        a = HostelFeeDiscount.objects.create(**validated_data)
        # a.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))
        # a.addsection = AddSection.objects.get(pk = int(self.context['request'].data['addsection']))
        a.addadmission = Admissions.objects.get(pk = int(self.context['request'].data['addadmission']))

        a.save()
        return a
    def update(self ,instance, validated_data):
        for key in ['created','amount','month','t_amount']:
            try:
                setattr(instance , key , validated_data[key])
            except:
                pass
        instance.addclass = AddClass.objects.get(pk = int(self.context['request'].data['addclass']))
        instance.addsection = AddSection.objects.get(pk = int(self.context['request'].data['addsection']))
        instance.addadmission = Admissions.objects.get(pk = int(self.context['request'].data['addadmission']))

        instance.save()
        return instance

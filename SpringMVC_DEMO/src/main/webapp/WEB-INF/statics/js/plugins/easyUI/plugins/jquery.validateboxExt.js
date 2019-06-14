//����
$.extend($.fn.validatebox.defaults,{
    missingMessage: "������.",
    rules:{
        email:{
            message:"������һ����Ч�������ַ."
        },
        url: {
            message: "������һ����Ч��URL��ַ."
        },
        length: {
            message: "������һ�� {0} �� {1}֮���ֵ."
        },
        //��̨��֤
        remote: {
            message: "��֤δͨ������������."
        }
    }
});
//��չeasyui������֤
$.extend($.fn.validatebox.defaults.rules,{
    //��֤����
    CHS:{
        validator: function (value) {
            return /^[\u0391-\uFFE5]+$/.test(value);
        },
        message: '�����뺺��.'
    },
    //�ƶ��ֻ�������֤
    Mobile: {//valueֵΪ�ı����е�ֵ
        validator: function (value) {
            var reg = /^1[3|4|5|8|9]\d{9}$/;
            return reg.test(value);
        },
        message: '��������ȷ�ĵ绰����.'
    },
    //�����ʱ���֤
    ZipCode: {
        validator: function (value) {
            var reg = /^[0-9]\d{5}$/;
            return reg.test(value);
        },
        message: 'The zip code must be 6 digits and 0 began.'
    },
    //����
    Number: {
        validator: function (value) {
            var reg =/^[0-9]*$/;
            return reg.test(value);
        },
        message: '����������.'
    }
});
//ʹ�ð���
//<td><input class="easyui-validatebox textbox" data-options="required:true,validType:'length[3,10]'"></td>
//<td><input class="easyui-validatebox textbox" data-options="required:true,validType:'email'"></td>
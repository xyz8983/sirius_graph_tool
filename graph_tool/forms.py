from django import forms

class UploadJSONandImage(forms.Form):
    file_field = forms.FileField(
        # widget=forms.ClearableFileInput(attrs={'multiple': True})
        error_messages={'required': 'Please upload json file and image files'}
    )


    @staticmethod
    def get_extension(file_name):
        # extensions = set(['json', 'jpg', 'png']),
        pass
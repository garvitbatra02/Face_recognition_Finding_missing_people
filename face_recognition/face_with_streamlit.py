import cv2
from simple_facerec import SimpleFacerec
import streamlit as st
# import requests
# from getlocationinfo2 import getlocation
# st.title("Face Recognition App")
# st.set_page_config(layout="wide")





# hide_st_style = """
#             <style>
#             #MainMenu {visibility: hidden;}
#             footer {visibility: hidden;}
#             header {visibility: hidden;}
#             </style>
#             """
# st.markdown(hide_st_style, unsafe_allow_html=True)







original_title = '<p style="font-family:sans-serif; color:#282c34; font-size: 50px;text-align:center;font-weight:700">Face Recognition App</p>'
st.markdown(original_title, unsafe_allow_html=True)

FRAME_WINDOW=st.image([])




# encode faces from a folder
sfr=SimpleFacerec()
sfr.load_encoding_images("images/")


# load camera
cap=cv2.VideoCapture(0)


# mylocation=getlocation()
# print(mylocation)


namesset=set()



while True:
    ret,frame=cap.read()

    # detect faces
    face_locations,face_names=sfr.detect_known_faces(frame)
    for face_loc,name in zip(face_locations,face_names):
        y1,x2,y2,x1=face_loc[0],face_loc[1],face_loc[2],face_loc[3]
        if(name!="Unknown"):
            flag=name in namesset
            namesset.add(name)
            if(flag==False):
                print(name)


        cv2.putText(frame,name,(x1,y1-10),cv2.FONT_HERSHEY_DUPLEX,1,(0,0,200),2)
        cv2.rectangle(frame,(x1,y1),(x2,y2),(0,0,200),4)

    newframe = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    cv2.imshow("Frame",frame)
    FRAME_WINDOW.image(newframe)   
    key=cv2.waitKey(1)
    if key==27:
        break


cap.release()
cv2.destroyAllWindows()











# img=cv2.imread("messi.jpg")
# rgb_img=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
# img_encoding=face_recognition.face_encodings(rgb_img)[0]

# img2=cv2.imread("images/messiimg2.jpg")
# rgb_img2=cv2.cvtColor(img2,cv2.COLOR_BGR2RGB)
# img_encoding2=face_recognition.face_encodings(rgb_img2)[0]


# result=face_recognition.compare_faces([img_encoding],img_encoding2)
# print(result)

# cv2.imshow("Img",img)
# cv2.imshow("Img 2",img2)
# cv2.waitKey()

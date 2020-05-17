FROM adnrv/opencv



RUN mkdir app

WORKDIR /app



RUN pip3 install Flask
RUN pip3 install imutils
RUN pip3 install vptree

COPY . ./

CMD ["python","app.py"]

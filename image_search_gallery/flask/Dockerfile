FROM openserver



RUN mkdir app

WORKDIR /app



RUN pip3 install Flask
RUN pip3 install flask-cors
RUN pip3 install imutils
RUN pip3 install vptree

ENV FLASK_ENV=development
ENV FLASK_APP=app.py

COPY . ./

EXPOSE 5000

CMD ["flask","run", "--host=0.0.0.0"]

FROM nginx:1.19.3-alpine
# FROM yuchen168/myapp001


COPY nginx.conf /etc/nginx/nginx.conf
COPY app.json /etc/uwsgi/app.json

COPY html.zip /usr/local/html.zip
WORKDIR /usr/local
RUN mkdir html
RUN unzip html.zip -d html

COPY uwsgi /tmp/uwsgi
RUN install -m 755 /tmp/uwsgi /usr/bin/uwsgi
RUN rm /tmp/uwsgi
# RUN /usr/bin/uwsgi -config=/etc/uwsgi/app.json


EXPOSE 10000

# CMD ["nginx", "-g", "daemon off;"]
# nginx -g 'daemon off;'

ADD app.sh /
RUN chmod +x /app.sh
CMD /app.sh

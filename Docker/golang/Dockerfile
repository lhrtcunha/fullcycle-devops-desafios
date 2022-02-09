FROM golang:1.16-alpine as builder
WORKDIR /go/src/full-cycle
ADD full-cycle/. .
RUN go build -o full-cycle main.go

FROM scratch
WORKDIR /go/src/full-cycle
COPY --from=builder /go/src/full-cycle/. .
EXPOSE 8080
CMD [ "./full-cycle" ]

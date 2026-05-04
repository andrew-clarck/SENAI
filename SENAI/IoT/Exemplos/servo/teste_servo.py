from servo import Servo
from time import sleep

# Create a Servo object on pin 0
servo=Servo(pin=16)

try:
    while True:
        #Servo at 0 degrees
        servo.move(0)
        print("0 graus")
        sleep(2)
        #Servo at 45 degrees
        servo.move(45)
        print("45 graus")
        sleep(2)
        #Servo at 90 degrees
        servo.move(90)
        print("90 graus")
        sleep(2)
        #Servo at 135 degrees
        servo.move(135)
        print("135 graus")
        sleep(2)
        #Servo at 180 degrees
        servo.move(180)
        print("180 graus")
        sleep(2)
       
        
except KeyboardInterrupt:
    print("Keyboard interrupt")
    # Turn off PWM 
    servo.stop()
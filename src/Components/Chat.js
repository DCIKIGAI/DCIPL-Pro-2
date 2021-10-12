import React, { useState, useEffect } from "react";
import "../Pages/CSS/chat.css";
import $ from 'jquery';

const Chat = () => {

//  useEffect(() => {
// $(function(){
//   var convForm = $('.my-conv-form-wrapper').convform();
// });
//  });
return (

<>
	<section id="demo">
	    <div class="vertical-align">
	        <div class="container">
	            <div class="row">
	                <div class="col-sm-6 col-sm-offset-3 col-xs-offset-0">
	                    <div class="card no-border">
	                        <div id="chat" class="conv-form-wrapper">
	                            <form action="" method="GET" class="hidden">
	                            	<input type="text" name="name" data-conv-question="Alright! Let me know your full name, please."/>
	                            	<input type="text" data-conv-question="Hi, {name}:0! It's a pleasure to meet you." data-no-answer="true"/>
	                     	
	                            	<input data-conv-question="Alright! Let me know your age, please." data-pattern="^[0-9.!]*$"  type="text" name="age" required placeholder="What's your e-mail?"/>

	                            	<input type="text" data-conv-question="You entered you age as , {age}:0!" data-no-answer="true"/>

	                            	<input data-conv-question="Type in your e-mail" data-pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" id="email" type="email" name="email" required placeholder="What's your e-mail?"/>

	                            	<input type="email" data-conv-question="You entered you email as , {email}:0!" data-no-answer="true"/>

	                                <select data-conv-question="Choose out a service" name="first-question">
	                                    <option value="needaplan">NEED'S PLAN</option>
	                                    <option value="wanttoknowmore">WANNA KNOW MORE PLANNING</option>
	                                    <option value="writeus">WRITE US</option>
	                                </select>
	                                <div data-conv-fork="first-question">
	                                	<div data-conv-case="needaplan">
	                                		<select data-conv-question="Choose which planning" name="plans">
	                	                    	<option value="investment">Investment</option>
	            	                        	<option value="tax">Tax</option>
	        	                            	<option value="retirement">Retirement</option>
	    	                                	<option value="wealth">Wealth</option>
			                                </select>
			                               	<div data-conv-fork="plans">
	                                			<div data-conv-case="investment">
	                                				<input type="text" data-conv-question="Your response has been recorded"  data-no-answer="true"/>
	                                				<input type="text" data-conv-question="Our team will reach you out ASAP"  data-no-answer="true"/>
	                                			</div>
	                                		</div>
	                                		<div data-conv-fork="plans">
	                                			<div data-conv-case="tax">
	                                				<select data-conv-question="How many members are there in family" name="nomembers">
	                                					<option value="lessthen">Less Then 10</option>
	            	                        			<option value="morethen">MORE Then 10</option>
	            	                        		</select>
	            	                        		<div data-conv-fork="nomembers">
	                                					<div data-conv-case="lessthen">
	                                						<input type="text" data-conv-question="Your response has been recorded"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="Our team will reach you out ASAP"  data-no-answer="true"/>
	                                					</div>
	                                				</div>
	                                				<div data-conv-fork="nomembers">
	                                					<div data-conv-case="morethen">
	                                						<input type="text" data-conv-question="Your are not eligible"  data-no-answer="true"/>
	                                					</div>
	                                				</div>
	                                			</div>
	                                		</div>
	                                		<div data-conv-fork="plans">
	                                			<div data-conv-case="retirement">
	                                				<select data-conv-question="Choose your retirment age" name="retireage">
	                                					<option value="less">Less Then 21</option>
	                                					<option value="mid">BETWEEN 21 and 80</option>
	            	                        			<option value="more">MORE Then 80</option>
	            	                        		</select>
	            	                        		<div data-conv-fork="retireage">
	                                					<div data-conv-case="less">
	                                						<input type="text" data-conv-question="Your are not eligible"  data-no-answer="true"/>
	                                					</div>
	                                				</div>
	                                				<div data-conv-fork="retireage">
	                                					<div data-conv-case="more">
	                                						<input type="text" data-conv-question="Your are not eligible"  data-no-answer="true"/>
	                                					</div>
	                                				</div>
	                                				<div data-conv-fork="retireage">
	                                					<div data-conv-case="mid">
	                                						<select data-conv-question="Choose your expectency age" name="expectencyage">
	                                							<option value="less">Less Then 36</option>
	                                							<option value="mid">BETWEEN 36 and 80</option>
	            	                        					<option value="more">MORE Then 80</option>
	            	                        				</select>
	            	                        				<div data-conv-fork="expectencyage">
	                                							<div data-conv-case="less">
	                                								<input type="text" data-conv-question="Your are not eligible"  data-no-answer="true"/>
	                                							</div>
	                                						</div>
	                                						<div data-conv-fork="expectencyage">
	                                							<div data-conv-case="more">
	                                								<input type="text" data-conv-question="Your are not eligible"  data-no-answer="true"/>
	                                							</div>
	                                						</div>
	                                						<div data-conv-fork="retireage">
	                                							<div data-conv-case="mid">
	                                								<input type="text" data-conv-question="Your response has been recorded"  data-no-answer="true"/>
	                                								<input type="text" data-conv-question="Our team will reach you out ASAP"  data-no-answer="true"/>
	                                							</div>
	                                						</div>
	                                					</div>
	                                				</div>
	                                			</div>
	                                		</div>
	                                		<div data-conv-fork="plans">
	                                			<div data-conv-case="wealth">
	                                				<input data-conv-question="Alright! Let me know what percent can you put for for Saving/Investment." data-pattern="^[0-9.!]*$"  type="text" name="percent"/>

	                            					<input type="text" data-conv-question="You entered that you can put {percent}:0% a side" data-no-answer="true"/>

	                            					<input type="text" name="short" data-conv-question="Alright! Let me know your short term goals, please."/>
	                            					<input type="text" name="middle" data-conv-question="Alright! Let me know your mid term goals, please."/>
	                            					<input type="text" name="long" data-conv-question="Alright! Let me know your long term goals, please."/>
	                            					<select data-conv-question="Choose your risk willingness" name="willingness">
	                           							<option value="low">LOW</option>
	                                					<option value="midium">MEDIUM</option>
	            	                        			<option value="high">HIGH</option>
	            	                        		</select>
	            	                        		<div data-conv-fork="willingness">
	                                					<div data-conv-case="low">
	                                						<input type="text" data-conv-question="DEBT------EQUALITY"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  95-------------5"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  90------------10"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  85------------15"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  80------------20"  data-no-answer="true"/>

	                               						</div>
	                          						</div>
	                          						<div data-conv-fork="willingness">
	                                					<div data-conv-case="midium">
	                                						<input type="text" data-conv-question="DEBT------EQUALITY"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  75------------25"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  70------------30"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  65------------35"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  60------------40"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  55------------45"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  50------------50"  data-no-answer="true"/>
	                               						</div>
	                          						</div>
	                          						<div data-conv-fork="willingness">
	                                					<div data-conv-case="high">
	                                						<input type="text" data-conv-question="DEBT------EQUALITY"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  45------------55"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  40------------60"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  35------------65"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  30------------70"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  25------------75"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  20------------80"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  15------------85"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="  10------------90"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="   5------------95"  data-no-answer="true"/>
	                                						<input type="text" data-conv-question="   0-----------100"  data-no-answer="true"/>
	                               						</div>
	                          						</div>
	                          						<input type="text" name="realistic" data-conv-question="What is your realistic return expectation"/>
	                          						
	                          						<input type="text" data-conv-question="Your response has been recorded"  data-no-answer="true"/>
	                                				
	                                				<input type="text" data-conv-question="Our team will reach you out ASAP"  data-no-answer="true"/>
	                                			</div>
	                                		</div>
			                            </div>
			                        </div>
	                                <div data-conv-fork="first-question">
	                                	<div data-conv-case="wanttoknowmore">
	         	    						<input type="text" data-conv-question="Please visit our website to know more about planning"  data-no-answer="true"/>
	                                				
	                        				<input type="text" data-conv-question="Our team will reach you out ASAP"  data-no-answer="true"/>
	                                	</div>
	                            	</div>
	                            	<div data-conv-fork="first-question">
	                                	<div data-conv-case="writeus">
	                                		<input type="text" data-conv-question="Write to us in contact form"  data-no-answer="true"/>
	                                				
	                                		<input type="text" data-conv-question="Our team will reach you out ASAP"  data-no-answer="true"/>
	                                	</div>
	                                </div>
	                            </form>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>
	<script type="text/javascript" src="jquery-1.12.3.min.js"></script>
	<script type="text/javascript" src="dist/autosize.min.js"></script>
	<script type="text/javascript" src="dist/jquery.convform.js"></script>
	{/*{
		jQuery(function($){
			convForm = $('#chat').convform({selectInputStyle: 'disable'});
			console.log(convForm);
		});
	}*/}
</>
);
};

export default Chat;
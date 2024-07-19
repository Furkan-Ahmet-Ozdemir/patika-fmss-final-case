package com.patika.kitapyurdum.config;

import lombok.Data;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Data
public class RabbitConfig {

    @Value("${notification.queue.order}")
    private String notificationQueueOrder;

    @Value("${notification.exchange}")
    private String exchange;

    @Value("${notification.routingkey.order}")
    private String routingKeyOrder;

    @Bean
    public Queue notificationQueueOrder() {
        return new Queue(notificationQueueOrder, true);
    }


    @Bean
    public TopicExchange notificationExchange() {
        return new TopicExchange(exchange);
    }

    @Bean
    public Binding bindingOrderCreated() {
        return BindingBuilder.bind(notificationQueueOrder())
                .to(notificationExchange())
                .with(routingKeyOrder);
    }

    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(jsonMessageConverter());
        return rabbitTemplate;
    }
}

